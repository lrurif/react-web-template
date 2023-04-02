import { Suspense, lazy } from "react";
import { HashRouter, Routes, Navigate, Route} from "react-router-dom";
import Layout from "@/layout/index";

// 导入基础路由 -start

// Pages
import  Login from '@/views/login'
import  Page404 from '@/views/404'
// 导入基础路由 -end
const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse">
            加载中
        </div>
    </div>
);

export default () => {
    return (
        <HashRouter>
            {/* <Suspense fallback={loading}> */}
                <Routes>
                    <Route path="/" element={<Navigate replace={true} to="/login"></Navigate>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/404" element={<Page404/>}></Route>
                    <Route path="*" element={<Layout/>}>
                    </Route>
                </Routes>
            {/* </Suspense> */}
        </HashRouter>
    );
};
