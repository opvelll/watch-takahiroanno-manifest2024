import { Anchor, Divider } from "antd";
import issues from "../assets/issues.json"
import ExternalLink from "../components/ExternalLink";
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
        <div className="flex flex-col px-2 md:pt-8">
            <div className="space-y-6 md:px-28 lg:px-44 mb-10">
                <div className=" rounded-8  space-y-8 p-6  flex flex-col items-center">
                    <div className="text-std-28B-5 md:text-std-32B-5 lg:text-std-45B-4">
                        Watch-TakahiroAnnno-Manifest
                    </div>
                    <div className="text-center lg:max-w-3xl ">
                        <div className="text-std-16N-7">
                            <p>
                                このサイトは、2024年東京都知事選挙の候補者である安野たかひろ氏が公開している<a href="https://github.com/takahiroanno2024/election2024" target="_blank" rel="noopener noreferrer" className="text-primary underline">マニフェストGitHubリポジトリ</a>の変化を追跡し、
                            </p><p>一般の方々にもわかりやすい形式で情報を提供するためのものです。</p>
                        </div>
                        <div className="text-std-16N-7">
                            <span className="line-through">・情報は30分ごとに更新されます。</span>（選挙活動期間が終わり、マニフェストレポジトリがアーカイブされたため、更新は行われません。）
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col space-y-4 justify-center items-center text-std-16N-7">

                            <ExternalLinkButton
                                url="https://github.com/takahiroanno2024/election2024"
                                text="本家様 : 安野たかひろGitHubリポジトリ" />
                            <ExternalLink href="https://github.com/opvelll/watch-takahiroanno-manifest2024">このサイトのGitHubリポジトリ</ExternalLink>
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
                                👍️の多い提案
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
                                コメントの多い提案
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
                                className="text-primary underline">最新の提案</a>
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
                        { key: "mostReaction", href: "#mostReactionIssues", title: "👍️の多い提案" },
                        { key: "mostComments", href: "#mostCommentsIssues", title: "コメントの多い提案" },
                        { key: "latest", href: "#latestIssues", title: "最新の提案" },

                    ]} />
                </div>
            </div>
        </div>
    )
}