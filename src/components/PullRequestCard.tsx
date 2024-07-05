import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { openInNewTab } from "../lib/openInNewTab";
import { formatDate } from "../lib/formatData";
import issues from "../assets/issues.json";
import { Fragment } from "react/jsx-runtime";
import ExternalLink from "./ExternalLink";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PullRequestCard({ pullRequest }: { pullRequest: any }) {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getIssues = (commitMessage: string): any[] => {
        const issueNumbers = commitMessage.match(/#[0-9]+/g);
        if (issueNumbers) {
            return issueNumbers.map((issueNumber) => {
                return issues.find((issue: { number: number }) => issue.number === parseInt(issueNumber.replace('#', '')));
            }).filter((issue) => issue !== undefined);
        }
        return [];
    };

    // 元になったIssueを取得
    const issueList = getIssues(pullRequest.body);

    return (
        <div className="border px-4 py-2 rounded-8 hover:shadow bg-white" >

            <div className="border-b pb-1 pr-2">
                <div className="text-std-20B-5 cursor-pointer hover:underline" onClick={() => openInNewTab(pullRequest.url)}>
                    {pullRequest.title}
                </div>
                <div>{formatDate(pullRequest.createdAt)}</div>
                {issueList.length > 0 && <div className="flex flex-col pt-1">
                    <div className='text-dns-14B-3 pb-1'>■ 元になった課題提起(Issue)</div>
                    <div className='text-dns-14N-3 ml-4'>
                        {issueList.map((issue: { title: string, url: string }, idx: number) => (
                            <Fragment key={idx}>
                                <div>
                                    <ExternalLink href={issue.url}>{issue.title}</ExternalLink>
                                </div>
                            </Fragment>
                        ))
                        }
                    </div>
                </div>
                }
            </div>

            <div className="scroll-auto overflow-y-auto max-h-40 p-2 cursor-pointer" onClick={() => openInNewTab(pullRequest.url)}>
                <Markdown remarkPlugins={[remarkGfm]}>{pullRequest.body}</Markdown>
            </div>

        </div>
    )
}