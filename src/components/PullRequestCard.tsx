import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { openInNewTab } from "../lib/openInNewTab";
import { formatDate } from "../lib/formatData";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PullRequestCard({ pullRequest }: { pullRequest: any }) {

    return (
        <div className="border px-4 py-2 rounded-8 cursor-pointer hover:border-slate-700 hover:shadow bg-white" onClick={() => openInNewTab(pullRequest.url)}>

            <div className="border-b pb-2 pr-2">
                <div className="text-std-20B-5" >{pullRequest.title}</div>
                <div>{formatDate(pullRequest.createdAt)}</div>
            </div>

            <div className="scroll-auto overflow-y-auto max-h-40 p-2">
                <Markdown remarkPlugins={[remarkGfm]}>{pullRequest.body}</Markdown>
            </div>
        </div>
    )
}