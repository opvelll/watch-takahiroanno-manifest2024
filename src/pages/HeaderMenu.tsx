import { Layout, Menu, MenuProps } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Footer, Content } = Layout;

export default function HeaderMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { key: '/', label: 'このサイトについて' },
        { key: '/issues', label: '課題提起一覧(Issues)' },
        { key: '/pullRequests', label: '変更提案一覧(PullRequests)' },
        { key: '/commits', label: '反映履歴一覧(Commits)' },
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
                <Content className="p-2 md:p-12">
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    watch-takahiroanno-manifest2024 ©{new Date().getFullYear()} Created by opvelll
                </Footer>
            </Layout>
        </>
    )
}