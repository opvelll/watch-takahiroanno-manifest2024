

import issues from '../assets/issues.json';
import IssueCard from '../components/IssueCard';
import ExternalLinkButton from '../components/ExternalLinkButton';

export default function Issues() {

    const sortedIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <>
            <div className='bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2'>
                <div>
                    <ExternalLinkButton
                        url='https://github.com/takahiroanno2024/election2024/issues'
                        text='GitHubのIssueページはこちら ' />
                </div>
                <div>
                    <ExternalLinkButton
                        url='https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_issue.md#new_issue'
                        text='新しいIssueの立て方はこちら' />
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