import "./index.scss";
import { Menu } from "antd";
import useUserInfo from "@/store/userInfo";
import menuList, { MenuItem } from "@/router/menuConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function MenuWrapper(props: any) {
    const navigate = useNavigate();
    const location = useLocation();
    const role = useUserInfo((state) => state.role);
    const filteredMenu = filterRoutes(menuList, role);
    const handleNavClick = ({ keyPath }: { keyPath: string[] }) => {
        navigate(keyPath[0]);
    };
    // 获取默认展开key列表
    function getDefaultPaths(
        paths: MenuItem[],
        pathname: string,
        res: string[]
    ):string[] | undefined {
        for (let path of paths) {
            res.push(path.path);
            if (path.path === pathname) return res;
            if (path.children) {
                let bool = getDefaultPaths(path.children, pathname, res);
                if (bool) return res;
            }
            res.pop();
        }
    }
    let [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
    if(defaultOpenKeys.length == 0 && !props.isCollapsed) {
        setDefaultOpenKeys(getDefaultPaths(filteredMenu, location.pathname, []) || [])
    }
    return (
        <div className="menu-wrapper">
            <Menu
                defaultOpenKeys={defaultOpenKeys}
                defaultSelectedKeys={defaultOpenKeys}
                mode="inline"
                onClick={handleNavClick}
                theme="dark"
                items={filteredMenu}
            />
        </div>
    );
}

function filterRoutes(routes: MenuItem[], role: string): any {
    let res = [];
    for (let route of routes) {
        if (route.roles === undefined || route.roles.includes(role)) {
            if (route.children) {
                route.children = filterRoutes(route.children, role);
                if (route.children?.length !== 0) {
                    res.push(route);
                }
            } else {
                res.push(route);
            }
        }
    }
    return res;
}
export default MenuWrapper;
