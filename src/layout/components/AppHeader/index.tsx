import AppBreadcrumb from "./components/AppBreadcrumb";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./index.scss";
import useAppStore from "@/store/app";
const AppHeader = () => {
    const { toggleCollapsed, isCollapsed } = useAppStore((state) => ({
        toggleCollapsed: state.toggleCollapsed,
        isCollapsed: state.isCollapsed,
    }));

    return (
        <div className="app-header">
            <div className="app-header__left">
                <div onClick={() => toggleCollapsed()} className="toggle-btn">
                    {isCollapsed ? (
                        <MenuUnfoldOutlined />
                    ) : (
                        <MenuFoldOutlined />
                    )}
                </div>

                <AppBreadcrumb></AppBreadcrumb>
            </div>
            <div className="app-header__right"></div>
        </div>
    );
};
export default AppHeader;
