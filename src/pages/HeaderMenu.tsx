import { Layout, Menu, MenuProps } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Footer, Content } = Layout;

export default function HeaderMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { key: '/', label: 'サイトについて' },
        { key: '/issues', label: '課題提起(Issues)' },
        { key: '/pullRequests', label: '変更提案(PullRequests)' },
        { key: '/mergedPullRequests', label: '取り込み済み提案' },
        { key: '/commits', label: '反映履歴(Commits)' },
    ]

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    }
    return (
        <>
            <Layout>
                <Header className="flex items-center bg-white border-b">
                    <Menu
                        onClick={handleMenuClick}
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={[location.pathname]}
                        items={items}
                        style={{ flex: 1, minWidth: 0 }}
                    />
                </Header>
                <Content className="p-2 md:px-12 md:py-8">
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    watch-takahiroanno-manifest2024 ©{new Date().getFullYear()} Created by opvelll
                </Footer>
            </Layout>
        </>
    )
}