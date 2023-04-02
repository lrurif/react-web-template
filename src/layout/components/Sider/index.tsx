import Logo from "./components/Logo";
import Menu from "./components/Menu";
import { Layout } from "antd";
const { Sider } = Layout;
import "./index.scss";
import useAppStore from "@/store/app";

export default () => {
    const isCollapsed = useAppStore((state) => state.isCollapsed);
    return (
        <Sider className="sider-wrapper" collapsed={isCollapsed}>
            <Logo isCollapsed={isCollapsed}></Logo>
            <Menu isCollapsed={isCollapsed}></Menu>
        </Sider>
    );
};
