
export type ExternalLinkBlockProps = {
    children: React.ReactNode;
}

export default function ExternalLinkBlock({ children }: ExternalLinkBlockProps) {
    return (
        <div className=' rounded-8 my-4 flex flex-col justify-center items-center space-y-2 py-2 md:flex-row md:space-x-4 md:space-y-0'>
            {children}
        </div>
    )
}