import Logo from "@/assets/react.svg"
import "./index.scss"
export default (props: any) => {
    return <div className="logo-wrapper">
        <img src={Logo} className="logo"/>
        {props.isCollapsed?'':<span className="website-name">react模板</span>}
    </div>;
};
