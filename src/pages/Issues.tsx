

import issues from '../assets/issues.json';
import IssueCard from '../components/IssueCard';
import ExternalLinkButton from '../components/ExternalLinkButton';
import { Fragment } from 'react/jsx-runtime';
import ExternalLink from '../components/ExternalLink';
import ExternalLinkBlock from '../components/ExternalLinkBlock';

export default function Issues() {

    const sortedIssues = issues.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    return (
        <>
            <ExternalLinkBlock>

                <ExternalLinkButton
                    url="https://github.com/takahiroanno2024/election2024/issues"
                    text="本家レポジトリIssues" />

            </ExternalLinkBlock>
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