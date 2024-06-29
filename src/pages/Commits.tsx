import Sider from "antd/es/layout/Sider";
import commits from "../assets/commits.json"
import { Layout, Menu, Timeline } from "antd"

const { Content } = Layout;

export default function Commits() {

    const sideItems = [{ key: '1', label: 'マニュフェスト本文' }, { key: '2', label: '経過' }]

    return (
        <>
            <Layout>
                <Sider width={200} className="bg-white border-r">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={sideItems}
                    />
                </Sider>
                <Content style={{ padding: '0 48px' }} className="bg-white">
                    <div
                        className="rounded-8 bg-white"
                        style={{
                            minHeight: 280,
                            padding: 24,
                        }}>
                        <Timeline >
                            {commits.map((commit: { message: string }) => <Timeline.Item>
                                {commit.message}
                            </Timeline.Item>)}
                        </Timeline>
                    </div>
                </Content>
            </Layout>

        </>
    )
}