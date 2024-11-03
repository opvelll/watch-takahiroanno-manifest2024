import { Anchor, Divider } from "antd";
import issues from "../assets/issues.json"
import ExternalLinkButton from "../components/ExternalLinkButton";
import IssueCard from "../components/IssueCard";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
    //最新のIssue5件
    const latestIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);
    //いいねがついているIssue5件
    const issuesWithMostReactions = issues.sort((a, b) => b.reactions.totalCount - a.reactions.totalCount).slice(0, 5);
    //コメントがついているIssue5件
    const issuesWithMostComments = issues.sort((a, b) => b.comments.totalCount - a.comments.totalCount).slice(0, 5);
    return (
        <div className="flex flex-col">
            <div className="space-y-6 md:px-28 lg:px-44 mb-10">
                <div className=" rounded-8  space-y-8 p-6  flex flex-col items-center">
                    <div className="text-std-28B-5 md:text-std-32B-5 lg:text-std-45B-4">
                        Watch-TakahiroAnnno-Manifest
                    </div>
                    <div className="text-center lg:max-w-3xl ">
                        <div className="text-std-16N-7">
                            東京都知事選挙の立候補者である安野たかひろ氏は、<a href="https://github.com/takahiroanno2024/election2024" target="_blank" rel="noopener noreferrer" className="text-primary underline">GitHub上でマニフェストを公開</a>し、
                            一般からの意見や提案を募るという取り組みを行っています。
                        </div>
                        <div className="text-std-16N-7">
                            このサイトは、それを見やすくする試みです。
                        </div>
                        <div className="text-std-16N-7">
                            <span className="line-through">情報は30分ごとに更新されます。</span>（選挙活動期間が終わり、マニフェストレポジトリがアーカイブされたため、更新は行われません。）
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-4 justify-center items-center text-std-16N-7">

                            <div className="flex flex-row space-x-2">
                                <ExternalLinkButton
                                    url="https://github.com/takahiroanno2024/election2024"
                                    text="安野たかひろGitHubリポジトリ" />

                            </div>

                            <ExternalLinkButton
                                url="https://manifest.takahiroanno.com/"
                                text="安野たかひろ：都知事選2024マニフェスト" />
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
            <div className="flex flex-col md:flex-row max-w-max">
                <div className="space-y-6">
                    <div>
                        <div className="text-std-20B-5 pb-4 text-center" id="mostReactionIssues">
                            <a href="https://github.com/takahiroanno2024/election2024/issues?q=is%3Aissue+label%3A%E7%B5%8C%E6%B8%88%2C%E5%8C%BB%E7%99%82%E3%83%BB%E9%98%B2%E7%81%BD%2C%E6%95%99%E8%82%B2%E3%83%BB%E5%AD%90%E8%82%B2%E3%81%A6%2C%E8%A1%8C%E6%94%BF%2C%E6%B0%91%E4%B8%BB%E4%B8%BB%E7%BE%A9%2C%E3%81%9D%E3%81%AE%E4%BB%96+sort%3Areactions-%2B1-desc+"
                                target="_blank" rel="noopener noreferrer"
                                className="text-primary underline">
                                👍️の多いIssue
                            </a>
                        </div>
                        <div className="space-y-2">
                            {issuesWithMostReactions.map((issue, idx) => (
                                <Fragment key={idx}>
                                    <IssueCard key={idx} issue={issue} />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div className="rounded-8">
                        <div className="text-std-20B-5 pb-4 text-center" id="mostCommentsIssues">
                            <a href="https://github.com/takahiroanno2024/election2024/issues?q=is%3Aissue+label%3A%E7%B5%8C%E6%B8%88%2C%E5%8C%BB%E7%99%82%E3%83%BB%E9%98%B2%E7%81%BD%2C%E6%95%99%E8%82%B2%E3%83%BB%E5%AD%90%E8%82%B2%E3%81%A6%2C%E8%A1%8C%E6%94%BF%2C%E6%B0%91%E4%B8%BB%E4%B8%BB%E7%BE%A9%2C%E3%81%9D%E3%81%AE%E4%BB%96+sort%3Acomments-desc"
                                target="_blank" rel="noopener noreferrer"
                                className="text-primary underline">
                                コメントの多いIssue
                            </a>
                        </div>
                        <div className="space-y-2">
                            {issuesWithMostComments.map((issue, idx) => (
                                <Fragment key={idx}>
                                    <IssueCard key={idx} issue={issue} />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <Divider />
                    <div className="rounded-8">
                        <div className="text-std-20B-5 pb-4 text-center" id="latestIssues">
                            <a
                                href="https://github.com/takahiroanno2024/election2024/issues?q=is%3Aopen+label%3A%E7%B5%8C%E6%B8%88%2C%E5%8C%BB%E7%99%82%E3%83%BB%E9%98%B2%E7%81%BD%2C%E6%95%99%E8%82%B2%E3%83%BB%E5%AD%90%E8%82%B2%E3%81%A6%2C%E8%A1%8C%E6%94%BF%2C%E6%B0%91%E4%B8%BB%E4%B8%BB%E7%BE%A9%2C%E3%81%9D%E3%81%AE%E4%BB%96" target="_blank" rel="noopener noreferrer"
                                className="text-primary underline">最新のIssue</a>
                        </div>
                        <div className="space-y-0 md:space-y-2">
                            {latestIssues.map((issue, idx) => (
                                <Fragment key={idx}>
                                    <div className="flex">

                                        <IssueCard key={idx} issue={issue} />
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                    <Divider />
                </div>
                <div className="hidden md:inline-block p-4">
                    <Anchor offsetTop={10} items={[
                        { key: "mostReaction", href: "#mostReactionIssues", title: "👍️の多いIssue" },
                        { key: "mostComments", href: "#mostCommentsIssues", title: "コメントの多いIssue" },
                        { key: "latest", href: "#latestIssues", title: "最新のIssue" },

                    ]} />
                </div>
            </div>
        </div>
    )
}