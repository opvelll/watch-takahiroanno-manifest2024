
import commits from "../assets/commits.json"
import { Timeline, TimelineItemProps } from "antd"
import CommitCard from "../components/CommitCard";
import ExternalLinkButton from "../components/ExternalLinkButton";
import ExternalLink from "../components/ExternalLink";
import ExternalLinkBlock from "../components/ExternalLinkBlock";


export default function Commits() {

    const sortedCommits = commits.sort((a, b) => new Date(b.committedDate).getTime() - new Date(a.committedDate).getTime());

    const items: TimelineItemProps[] = sortedCommits.map((commit: { message: string }) => {
        return {
            children: <CommitCard commit={commit} />,
        }
    })

    return (
        <>
            <ExternalLinkBlock>
                <ExternalLinkButton
                    url="https://manifest.takahiroanno.com/"
                    text="安野たかひろ：都知事選2024マニフェスト" />
            </ExternalLinkBlock>

            <div className="p-4 bg-white rounded-8">
                <div className="text-std-20B-5 pb-8">
                    <ExternalLink href="https://github.com/takahiroanno2024/election2024/commits/main/docs/manifest">
                        マニフェストの変更履歴
                    </ExternalLink>
                </div>
                <Timeline items={items} />
            </div>


        </>
    )
}