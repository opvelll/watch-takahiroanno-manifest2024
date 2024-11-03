

import issues from '../assets/issues.json';
import IssueCard from '../components/IssueCard';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Fragment } from 'react/jsx-runtime';
import ExternalLink from '../components/ExternalLink';

export default function Issues() {

    const sortedIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <>
            <div className='bg-white rounded-8 mb-4 flex flex-col justify-center items-center space-y-2 py-2 md:flex-row md:space-x-4 md:space-y-0'>

                <ExternalLinkButton
                    url="https://github.com/takahiroanno2024/election2024/blob/main/docs/contribution.md"
                    text="貢献したいあなたへ" />
                <ExternalLinkButton
                    url='https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_issue.md#new_issue'
                    text='新しいIssueの立て方はこちら' />

            </div>
            <div className='p-4 bg-white rounded-8'>
                <div className='text-std-20B-5 p-4'>
                    <ExternalLink href={'https://github.com/takahiroanno2024/election2024/issues'}>課題提起(Issue)の一覧</ExternalLink>
                </div>
                <div className=''>
                    {sortedIssues.map((issue, idx) => (
                        <Fragment key={idx}>
                            <IssueCard issue={issue} />
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}