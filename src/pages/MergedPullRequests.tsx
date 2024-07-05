
import ExternalLinkButton from "../components/ExternalLinkButton";
import pullRequests from "../assets/pullRequests.json";
import { Fragment } from "react/jsx-runtime";
import PullRequestCard from "../components/PullRequestCard";
import ExternalLink from "../components/ExternalLink";

export default function MergedPullRequests() {
    const sortedPullRequests = pullRequests.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    const mergedPullRequests = sortedPullRequests.filter((pullRequest) => pullRequest.state === 'MERGED');
    return (
        <>
            <div className='bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2'>
                <ExternalLinkButton
                    url='https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_pull_request.md'
                    text='変更提案(Pull Request)の仕方はこちら' />
            </div>
            <div className='p-4 bg-white rounded-8'>
                <div className='text-std-20B-5 pl-2 pt-2 pr-2 pb-4'>
                    <ExternalLink href="https://github.com/takahiroanno2024/election2024/pulls?q=state%3Amerged+type%3Apr+">
                        取り込まれた変更提案(PullRequests)の一覧
                    </ExternalLink>
                </div>

                <div className="space-y-4">
                    {/*  eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {mergedPullRequests.map((pullRequest: any, idx: number) => (
                        <Fragment key={idx}>
                            <PullRequestCard pullRequest={pullRequest} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </>

    )
}