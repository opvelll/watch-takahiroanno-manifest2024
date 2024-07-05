
import DiffViewer, { DiffMethod } from 'react-diff-viewer';
import { formatDate } from '../lib/formatData';
import { Fragment } from 'react/jsx-runtime';
import { openInNewTab } from '../lib/openInNewTab';
import { useEffect, useState } from 'react';
// import issues from '../assets/issues.json';

const isMobile = () => window.innerWidth <= 768;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CommitCard({ commit }: { commit: any }) {
    // splitViewの状態を管理
    const [splitView, setSplitView] = useState(!isMobile());

    useEffect(() => {
        // 画面サイズが変わった時にsplitViewを更新
        const handleResize = () => {
            setSplitView(!isMobile());
        };

        window.addEventListener('resize', handleResize);

        // コンポーネントがアンマウントされた時にイベントリスナーを削除
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // const getIssues = (commitMessage: string) => {
    //     const issueNumbers = commitMessage.match(/#[0-9]+/g);
    //     if (issueNumbers) {
    //         return issueNumbers.map((issueNumber) => {
    //             const issue = issues.find((issue: { number: number }) => issue.number === parseInt(issueNumber.replace('#', '')));
    //             return issue;
    //         });
    //     }
    //     return [];
    // }

    return (
        <div className="rounded-8 px-2 pb-2 border border-white  hover:shadow hover:border-slate-300">
            <div>
                <div className='' onClick={() => openInNewTab(commit.url)}>
                    <div className='text-mono-14N-5 text-slate-500'>
                        {formatDate(commit.committedDate)}
                    </div>
                    <div className="text-std-16N-7 py-1 hover:text-std-16B-7 hover:cursor-pointer">
                        {commit.message}
                    </div>
                </div>
                {commit.associatedPullRequests.edges &&
                    <div className="flex flex-col">
                        <div className='text-dns-14B-3 pb-1'>■ 元になった変更提案(Pull Request)</div>
                        <div className='text-dns-14N-3 ml-4'>
                            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                            {commit.associatedPullRequests.edges.map((pr: { node: any }, idx: number) => (
                                <Fragment key={idx}>
                                    <div>
                                        <a href={pr.node.url} target='_blank' rel='noreferrer noopener' className='text-primary underline'>{pr.node.title}</a>
                                    </div>
                                    <div>
                                        {pr.node.timelineItems.nodes.map((node: { subject: { title: string, url: string } }, idx: number) => (
                                            <div key={idx} className='ml-4'>
                                                {node.subject &&
                                                    <div className="flex flex-col pt-2">
                                                        <div className='text-dns-14B-3 pb-1'>■ 元になった課題提起(Issue)</div>
                                                        <div className='text-dns-14N-3 pl-4'>
                                                            <a href={node.subject.url} target='_blank' rel='noreferrer noopener' className='text-primary underline'>{node.subject.title}
                                                            </a>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                    </div>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                }
            </div>
            <div className='space-y-2 pt-2'>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {commit.files.map((file: any) => (
                    <div key={file.sha} className='border cursor-pointer hover:border-primary' onClick={() => openInNewTab(commit.url)}>
                        <div className='text-mono-14N-5 text-slate-600 px-2 py-1'>
                            {file.filename}
                        </div>

                        <div>
                            {file.patch && <DiffViewer
                                oldValue={file.patch.split('\n').filter((line: string) => line.startsWith('-')).join('\n')}
                                newValue={file.patch.split('\n').filter((line: string) => line.startsWith('+')).join('\n')}
                                splitView={splitView}
                                hideLineNumbers={true}
                                compareMethod={DiffMethod.WORDS}
                                styles={{
                                    variables: {
                                        light: {
                                            diffViewerBackground: '#f7f7f7',
                                        },
                                    },
                                }}
                            />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}