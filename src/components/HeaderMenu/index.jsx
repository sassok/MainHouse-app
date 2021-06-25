import "./style.css";
import logo from "../../assets/images/Mainhouseblack.png"
const HeaderMenu = () => {
    return(
        <>
            <header class="header whiteSpaceHeader">
                    <img src={logo} className="respoLogo " alt="blackLogo"/>
            </header>
        </>
            )
};
export default HeaderMenu;