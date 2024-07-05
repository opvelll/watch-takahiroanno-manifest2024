
import commits from "../assets/commits.json"
import { Timeline, TimelineItemProps } from "antd"
import CommitCard from "../components/CommitCard";
import ExternalLinkButton from "../components/ExternalLinkButton";


export default function Commits() {

    const sortedCommits = commits.sort((a, b) => new Date(b.committedDate).getTime() - new Date(a.committedDate).getTime());

    const items: TimelineItemProps[] = sortedCommits.map((commit: { message: string }) => {
        return {
            children: <CommitCard commit={commit} />,
        }
    })

    return (
        <>
            <div className='bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2'>
                <ExternalLinkButton
                    url="https://manifest.takahiroanno.com/"
                    text="安野たかひろ：都知事選2024マニフェスト" />
            </div>

            <div className="p-4 bg-white rounded-8">
                <div className="text-std-20B-5 pb-8">
                    マニフェストの変更履歴
                </div>
                <Timeline items={items} />
            </div>


        </>
    )
}