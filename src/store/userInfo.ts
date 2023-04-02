import { create } from "zustand";
import { persist } from "zustand/middleware";

import { routes } from "@/router/menuConfig"

type UserInfo = {
    role: string,
    token: string,
    handleLoginInfo: (role: string, token: string) => void,
    resetStatus: () => void,
}
function getInitData () {
    return {
        role: "", // 用户权限
        token: "",
        
      }
}
let store = persist<UserInfo>((set: any, get: any) => (
    {
        ...getInitData(),
        handleLoginInfo(role: string, token: string) {
            set(() => ({role, token}))
            let firstRoutePath = routes.find(item => item.roles?.includes(role))
            if(firstRoutePath) {
                window.location.hash = `#${firstRoutePath.path}`;
            }
        },
        resetStatus() {
            set(() => (getInitData()))
        }
    }
), { name: "userInfo" });


const useUserInfo = create(store);
export default useUserInfo;
