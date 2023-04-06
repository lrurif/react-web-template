import { Layout } from "antd";
const { Content } = Layout;
import { routes, MenuItem } from "@/router/menuConfig";
import useUserInfo from "@/store/userInfo";
import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense } from "react";
import "./index.scss";
// 导入基础路由 -end
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse">加载中</div>
    </div>
);
export default () => {
    const { role, token } = useUserInfo((state) => ({
        role: state.role,
        token: state.token,
    }));
    return (
        <Content className="content-wrapper">
            <Suspense fallback={loading}>
                <Routes>
                    {routes.map((route) => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <RouterGuard
                                        role={role}
                                        token={token}
                                        route={route}
                                        element={<route.element />}
                                    ></RouterGuard>
                                }
                            ></Route>
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
function RouterGuard(props: {
    role: string;
    element: JSX.Element;
    route: any;
    token: string;
}) {
    if (!props.token) {
        return <Navigate to="/login" replace={true} />;
    }
    if (!props.route.roles?.includes(props.role)) {
        return <Navigate to="/404" replace={true} />;
    }
    return props.element;
}
