import { Button } from "antd";

export default function PullRequests() {
    return (
        <>
            <div className='bg-white rounded-8 mb-4 flex flex-row justify-center items-center space-x-4 py-2'>
                <Button
                    type='primary'
                    shape="round"
                    href='https://github.com/takahiroanno2024/election2024/blob/main/docs/manual_pull_request.md'>
                    変更提案の仕方はこちら
                </Button>
            </div>
            <div>
                工事中
            </div>
        </>

    )
}