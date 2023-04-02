import { Layout } from "antd";
const { Content } = Layout;
import { routes, MenuItem } from "@/router/menuConfig";
import useUserInfo from "@/store/userInfo";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./index.scss"
// 导入基础路由 -end
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse">加载中</div>
    </div>
);
export default () => {
    const role = useUserInfo((state) => state.role);
    return (
        <Content className="content-wrapper">
            <Suspense fallback={loading}>
                <Routes>
                    {routes.map((route) => {
                        return (
                            handleFilter(route, role) && (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<route.element />}
                                ></Route>
                            )
                        );
                    })}
                    <Route
                        path="*"
                        element={<Navigate to="/404" replace={true} />}
                    />
                </Routes>
            </Suspense>
        </Content>
    );
};
function handleFilter(route: MenuItem, role: string) {
    return route.roles?.includes(role) || false;
}
