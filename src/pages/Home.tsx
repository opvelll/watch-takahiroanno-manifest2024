import { Content } from "antd/es/layout/layout"
import issues from "../assets/issues.json"
import IssueCard from "../components/IssueCard";

export default function Home() {
    //最新のIssue5件
    const latestIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
    //いいねがついているIssue5件
    const issuesWithMostReactions = issues.sort((a, b) => b.reactions.totalCount - a.reactions.totalCount).slice(0, 5);
    //コメントがついているIssue5件
    const issuesWithMostComments = issues.sort((a, b) => b.comments.totalCount - a.comments.totalCount).slice(0, 5);
    return (
        <Content className="p-12">
            <div className=" space-y-2">
                <div className="bg-white rounded-8  space-y-8 p-6">
                    <div className="text-std-32B-5">
                        安野たかひろのマニフェストを眺めるサイト
                    </div>
                    <div>
                        <div className="text-std-16N-7">
                            東京都知事選挙の立候補者の一人である安野たかひろ氏が、GitHubでマニフェストを公開して議論を募るという試みを行っています。
                        </div>
                        <div className="text-std-16N-7">
                            このサイトでは、安野氏のGitHubのマニフェストの変更履歴部分を表示し、マニュフェストの議論の様子を追うことを目的としています。GitHubから30分おきに情報を取得し更新されます。
                        </div>
                    </div>
                    <div>
                        <div className="text-std-16N-7">
                            Links :
                        </div>
                        <div className="text-std-16N-7">
                            <a href="https://github.com/takahiroanno2024/election2024">安野たかひろ2024 マニフェストのリポジトリ</a>
                        </div>
                        <div className="text-std-16N-7">
                            <a href="https://manifest.takahiroanno.com/">安野たかひろ：都知事選2024マニフェスト</a>
                        </div>
                    </div>
                </div>
                <div className="rounded-8 bg-white">
                    <div className="text-std-20B-5 p-4">
                        最新のIssue
                    </div>
                    <div className="space-y-3">
                        {latestIssues.map((issue) => (
                            <IssueCard issue={issue} />
                        ))}
                    </div>
                </div>

                <div>
                    <div className="text-std-20B-5 p-4">
                        いいねがついているIssue
                    </div>
                    <div className="space-y-2">
                        {issuesWithMostReactions.map((issue) => (
                            <IssueCard issue={issue} />
                        ))}
                    </div>
                </div>
                <div>
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
        </Content>
    )
}