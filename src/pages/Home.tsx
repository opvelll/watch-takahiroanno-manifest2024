import issues from "../assets/issues.json"
import ExternalLinkButton from "../components/ExternalLinkButton";
import IssueCard from "../components/IssueCard";

export default function Home() {
    //最新のIssue5件
    const latestIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
    //いいねがついているIssue5件
    const issuesWithMostReactions = issues.sort((a, b) => b.reactions.totalCount - a.reactions.totalCount).slice(0, 5);
    //コメントがついているIssue5件
    const issuesWithMostComments = issues.sort((a, b) => b.comments.totalCount - a.comments.totalCount).slice(0, 5);
    return (
        <div className="space-y-4">
            <div className="bg-white rounded-8  space-y-8 p-6">
                <div className="text-std-32B-5">
                    安野たかひろのマニフェストGitHubを眺めるサイト
                </div>
                <div>
                    <div className="text-std-16N-7">
                        東京都知事選挙の立候補者の一人である安野たかひろ氏が、GitHubでマニフェストを公開して議論を募るという試みを行っています。
                    </div>
                    <div className="text-std-16N-7">
                        このサイトでは、安野氏のGitHubからマニフェストに関する部分を抽出して、議論の様子を追うことを目的としています。GitHubから30分おきに情報を取得し更新されます。
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-y-4 justify-center items-center text-std-16N-7">

                        <div className="flex flex-row space-x-2">
                            <ExternalLinkButton
                                url="https://github.com/takahiroanno2024/election2024"
                                text="安野たかひろGitHubリポジトリ" />
                            <ExternalLinkButton
                                url="https://github.com/takahiroanno2024/election2024/blob/main/docs/contribution.md"
                                text="貢献したいあなたへ" />
                        </div>

                        <ExternalLinkButton
                            url="https://manifest.takahiroanno.com/"
                            text="安野たかひろ：都知事選2024マニフェスト" />
                    </div>
                </div>
            </div>
            <div className="rounded-8 bg-white">
                <div className="text-std-20B-5 p-4">
                    最新のIssue
                </div>
                <div className="space-y-2">
                    {latestIssues.map((issue) => (
                        <IssueCard issue={issue} />
                    ))}
                </div>
            </div>

            <div className="rounded-8 bg-white">
                <div className="text-std-20B-5 p-4">
                    👍️の多いIssue
                </div>
                <div className="space-y-2">
                    {issuesWithMostReactions.map((issue) => (
                        <IssueCard issue={issue} />
                    ))}
                </div>
            </div>
            <div className="rounded-8 bg-white">
                <div className="text-std-20B-5 p-4">
                    コメントの多いIssue
                </div>
                <div className="space-y-2">
                    {issuesWithMostComments.map((issue) => (
                        <IssueCard issue={issue} />
                    ))}
                </div>
            </div>
        </div>
    )
}