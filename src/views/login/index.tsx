import { useState } from "react";
import "./index.scss";
import { UserOutlined, LockOutlined, MessageOutlined } from "@ant-design/icons";
import useUserInfo from "@/store/userInfo";
import { login } from "@/api/user";
export default function Login() {
    const handleLoginInfo = useUserInfo((state) => state.handleLoginInfo);
    let [loginStatus, setLoginStatus] = useState(true);
    let [loginForm, setLoginForm] = useState({
        userName: "",
        password: "",
    });
    function handleUserNameChange(e: any) {
        setLoginForm(
            Object.assign(loginForm, {
                userName: e.target.value,
            })
        );
    }
    function handlePasswordChange(e: any) {
        setLoginForm(
            Object.assign(loginForm, {
                password: e.target.value,
            })
        );
    }
    async function loginIn() {
        try {
            await login();
        } catch (e) {
            console.log(e, "error");
        } finally {
            handleLoginInfo("admin", "token123");
        }
    }
    function toggleStatus() {
        setLoginStatus(!loginStatus);
    }
    let status = "";
    return (
        <div className="login-container">
            <div
                className={"login-inner " + (loginStatus ? "" : "back-status")}
            >
                <div className="front-box">
                    <div className="box-title gradient">登录</div>
                    <div className="form-wrapper">
                        <div className="form-item">
                            <UserOutlined className="form-item__icon" />
                            <input
                                className="login-input"
                                v-model="loginForm.userName"
                                value={loginForm.userName}
                                onInput={handleUserNameChange}
                                type="text"
                                placeholder="请输入账号"
                            />
                        </div>
                        <div className="form-item">
                            <LockOutlined className="form-item__icon" />
                            <input
                                className="login-input"
                                value={loginForm.password}
                                onInput={handlePasswordChange}
                                type="password"
                                placeholder="请输入密码"
                            />
                        </div>
                        <div className="btn-wrapper">
                            <div className="submit-btn" onClick={loginIn}>
                                登录
                            </div>
                        </div>
                    </div>
                    <div className="tip-wrapper">
                        <div className="register-text gradient">
                            没有账号？
                            <span onClick={toggleStatus} className="btn">
                                立即注册
                            </span>
                        </div>
                        <div className="forget-password">忘记密码</div>
                    </div>
                </div>
                <div className="end-box">
                    <div className="box-title gradient">注册</div>
                    <div className="form-wrapper">
                        <div className="form-item">
                            <UserOutlined className="form-item__icon" />

                            <input
                                className="login-input"
                                type="text"
                                placeholder="请输入账号"
                            />
                        </div>
                        <div className="form-item">
                            <LockOutlined className="form-item__icon" />

                            <input
                                className="login-input"
                                type="password"
                                placeholder="请输入密码"
                            />
                        </div>
                        <div className="form-item">
                            <MessageOutlined className="form-item__icon" />
                            <input
                                className="login-input"
                                type="password"
                                placeholder="请输入电子邮箱"
                            />
                        </div>
                        <div className="btn-wrapper">
                            <div className="submit-btn">注册</div>
                        </div>
                    </div>
                    <div className="tip-wrapper center">
                        <div className="register-text gradient">
                            已有账号？
                            <span onClick={toggleStatus} className="btn">
                                立即登录
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="beian">
                <a target="_blank" href="https://beian.miit.gov.cn">
                    网站备案: 浙ICP备2022037674号
                </a>
            </div>
        </div>
    );
}
