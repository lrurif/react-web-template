import { useLocation } from "react-router-dom"
import menuList, {MenuItem} from "@/router/menuConfig";
import { Breadcrumb } from "antd";


const AppBreadcrumb = () => {
    const location = useLocation();
    let res:BreadItem[] = []
    getBreadData(menuList, location.pathname, res);
    return <div>
        <Breadcrumb items={res}></Breadcrumb>
    </div>
}
type BreadItem = {
    title: string
}
function getBreadData(menuList:MenuItem[], pathname:string, res:BreadItem[]) {
    for(let menu of menuList) {
        res.push({
            title: menu.label || "",
        });
        if(menu.children) {
            let bool = getBreadData(menu.children, pathname, res);
            if(bool) {
                return true;
            }
        }
        if(menu.path === pathname) {
            return true;
        }
        res.pop();
    }
}
export default AppBreadcrumb;