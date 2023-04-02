import { Layout } from "antd";
import Sider from "./components/Sider";
import Content from "./components/Content";
import AppHeader from "./components/AppHeader";
import useUserInfo from "@/store/userInfo";
import { Navigate } from "react-router-dom";


const LayoutWrapper = () => {
    const token = useUserInfo((state) => state.token);
    if (token) {
        return (
            <Layout style={{ minHeight: "100vh" }} hasSider={true}>
                <Sider></Sider>
                <Layout>
                    <AppHeader></AppHeader>
                    <Content></Content>
                </Layout>
            </Layout>
        );
    } else {
        return <Navigate to="/login"></Navigate>;
    }
};
// class="ant-layout css-dev-only-do-not-override-1e3x2xa"

// ant-layout ant-layout-has-sider css-dev-only-do-not-override-1e3x2xa
export default LayoutWrapper;
