import { Layout, Menu, MenuProps } from "antd";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const { Header, Footer } = Layout;

export default function HeaderMenu() {
    const location = useLocation();
    const navigate = useNavigate();
    const items = [{ key: '/commits', label: '経過' }, { key: '/issues', label: '議論(Issue)' }]
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
                <Outlet />
                <Footer style={{ textAlign: 'center' }}>
                    watch-takahiroanno-manifest2024 ©{new Date().getFullYear()} Created by opvelll
                </Footer>
            </Layout>
        </>
    )
}