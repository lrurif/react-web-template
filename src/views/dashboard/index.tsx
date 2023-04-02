import { useEffect } from "react"
import { getUserInfo } from "@/api/user"
import { Button } from "antd"
import useUserInfo from "@/store/userInfo"
export default () => {
    const resetStatus = useUserInfo(state => state.resetStatus);
    useEffect(() => {
        getUserInfo();
    }, [])
    function clearUserInfo() {
        resetStatus();
    }
    return <div>
        数据看板
        <Button onClick={clearUserInfo}>清除登录状态</Button>
    </div>
}