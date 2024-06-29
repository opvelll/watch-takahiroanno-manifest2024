import Sider from "antd/es/layout/Sider";
import commits from "./assets/commits.json"
import { Layout, Menu, Timeline } from "antd"

const { Header, Content, Footer } = Layout;

function App() {

  const items = [{ key: '1', label: '経過' }, { key: '2', label: '議論(Issue)' }]
  const sideItems = [{ key: '1', label: 'マニュフェスト本文' }, { key: '2', label: '経過' }]

  return (
    <>
      <Layout>
        <Header className="flex items-center bg-white border-b">
          <div className="text-mono-17B-5">
            安野たかひろのマニフェストを眺めるサイト
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
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
                {commits.map((commit) => <Timeline.Item>
                  {commit.message}
                </Timeline.Item>)}
              </Timeline>
            </div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          watch-takahiroanno-manifest2024 ©{new Date().getFullYear()} Created by opvelll
        </Footer>
      </Layout>
    </>
  )
}

export default App
