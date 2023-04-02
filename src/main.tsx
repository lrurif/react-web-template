import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/assets/style/index.scss";
// antd -start
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import "antd/dist/reset.css";
// antd -end

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <ConfigProvider locale={zhCN}>
            <App />
    </ConfigProvider>
);
