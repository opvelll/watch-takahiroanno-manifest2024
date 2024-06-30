
import DiffViewer, { DiffMethod } from 'react-diff-viewer';
import { formatDate } from '../lib/formatData';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CommitCard({ commit }: { commit: any }) {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="cursor-pointer border border-white  hover:shadow hover:border-slate-300 rounded-8 px-2 pb-2" onClick={() => openInNewTab(commit.url)}>
            <div>
                <div className='text-mono-14N-5 text-slate-600'>
                    {formatDate(commit.committedDate)}
                </div>
                <div className="text-std-16M-7">
                    {commit.message}
                </div>
            </div>
            <div className='space-y-2 pt-2'>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {commit.files.map((file: any) => (
                    <div key={file.sha} className='border rounded-8'>
                        <div className='text-mono-14N-5 text-slate-600 px-2 py-1'>
                            {file.filename}
                        </div>
                        <div>
                            <DiffViewer
                                oldValue={file.patch.split('\n').filter((line: string) => line.startsWith('-')).join('\n')}
                                newValue={file.patch.split('\n').filter((line: string) => line.startsWith('+')).join('\n')}
                                splitView={true}
                                hideLineNumbers={true}
                                compareMethod={DiffMethod.WORDS}
                                styles={{
                                    variables: {
                                        light: {
                                            diffViewerBackground: '#f7f7f7',
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}