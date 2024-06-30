
import { Button } from 'antd';
import issues from '../assets/issues.json';
import IssueCard from '../components/IssueCard';

export default function Issues() {

    const sortedIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <>
            <div className=''>
                <div>
                    GitHubのIssueページは<Button type='link' href='https://github.com/takahiroanno2024/election2024/issues'>こちら</Button>
                </div>
                <div>
                    新しいIssueの立て方は<Button type='link' href='https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_issue.md#new_issue'>こちら</Button>
                </div>
            </div>
            <div className='p-4 bg-white rounded-8'>
                <div className='text-std-20B-5 p-4'>
                    課題提起(Issue)の一覧
                </div>
                <div className=''>
                    {sortedIssues.map((issue) => (
                        <IssueCard issue={issue} />
                    ))}
                </div>
            </div>
        </>
    )
}