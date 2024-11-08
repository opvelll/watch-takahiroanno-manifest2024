import Markdown from "react-markdown";
import { BiComment } from "react-icons/bi";
import { formatDate } from "../lib/formatData";
import remarkGfm from 'remark-gfm'

export default function IssueCard({ issue }: { issue: { title: string, body: string, createdAt: string, url: string, comments: { totalCount: number }, reactions: { totalCount: number } } }) {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="cursor-pointer p-2 w-full" onClick={() => openInNewTab(issue.url)}>
            <div className="rounded-8 border hover:border-slate-700 hover:shadow bg-white">
                <div className="p-4">
                    <div className="pl-2 pb-2 pr-2 border-b flex justify-stretch">
                        <div className="flex-1">
                            <div className="text-std-16B-7 md:text-std-18B-6 pb-2">
                                {issue.title}
                            </div>
                            <div className="text-dns-14N-2 flex flex-row space-x-2">
                                <div className="rounded-32">{formatDate(issue.createdAt)}</div>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-2 space-x-2 text-mono-14B-5">
                            <div className="rounded-32">👍️ {issue.reactions.totalCount}</div>
                            <div className="rounded-32 flex items-center">
                                <span className="pr-2"><BiComment /></span >
                                {issue.comments.totalCount}</div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="scroll-auto overflow-y-auto max-h-44 min-w-64">
                            <Markdown remarkPlugins={[remarkGfm]}>{issue.body}</Markdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}