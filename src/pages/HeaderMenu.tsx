import { Layout, Menu, MenuProps } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Footer, Content } = Layout;

export default function HeaderMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { key: '/', label: 'WTAM2024' },
        { key: '/manifest', label: 'マニフェスト' },
        { key: '/issues', label: '課題提起' },
        { key: '/pullRequests', label: '変更提案' },
        { key: '/mergedPullRequests', label: '取り込まれた提案' },
        { key: '/commits', label: '反映履歴' },
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
                <Content className="md:px-12 md:pb-8">
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    watch-takahiroanno-manifest2024 ©{new Date().getFullYear()} Created by opvelll
                </Footer>
            </Layout>
        </>
    )
}