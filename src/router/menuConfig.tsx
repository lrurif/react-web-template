import { lazy } from "react";
import { UserOutlined, LockOutlined, MessageOutlined } from "@ant-design/icons";

export type MenuItem = {
    label?: string;
    title: string;
    path: string;
    key?: string;
    icon?: any;
    roles?: string[];
    element?: any;
    children?: MenuItem[];
};
/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList: MenuItem[] = [
    {
        title: "首页",
        path: "/dashboard",
        icon: <UserOutlined/>,
        element: lazy(() => import("@/views/dashboard/index")),
        roles: ["admin", "editor", "guest"],
    },
    {
        title: "开发文档",
        path: "/document",
        icon: <UserOutlined/>,
        element: lazy(() => import("@/views/document/index")),
        roles: ["admin", "editor", "guest"],
    },
    {
        title: "引导页",
        path: "/guide",
        icon: <UserOutlined/>,
        element: lazy(() => import("@/views/guide/index")),
        roles: ["admin", "editor", "guest"],
    },
    {
        title: "图表",
        path: "/charts",
        icon: <UserOutlined/>,
        children: [
            {
                title: "键盘图表",
                path: "/charts/keyboard",
                element: lazy(() => import("@/views/charts/keyboard/index")),
                roles: ["admin"],
            },
            {
                title: "折现图表",
                path: "/charts/line",
                element: lazy(() => import("@/views/charts/line/index")),
                roles: ["admin"],
            },
        ],
    },
];
function handleMenuList(menuList: MenuItem[]) {
    menuList.map((item: MenuItem) => {
        item.label = item.title;
        item.key = item.path;
        item.children && handleMenuList(item.children);
    });
}
handleMenuList(menuList);

function flatRoutes(routes: MenuItem[], res: MenuItem[] = []) {
    for (let route of routes) {
        if (route.children === undefined) {
            res.push(route);
        } else {
            flatRoutes(route.children, res);
        }
    }
    return res;
}
export const routes = flatRoutes(menuList, []);
console.log(routes);
export default menuList;
