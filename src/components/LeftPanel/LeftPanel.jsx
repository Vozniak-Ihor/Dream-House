import logo from "../../icons/logo.svg"
import facebook from "../../icons/facebook.svg"
import instagram from "../../icons/instagram.svg"
import telegram from "../../icons/telegram.svg"
import youtube from "../../icons/youtube.svg"

import panel from "./LeftPanel.module.css";

function LeftPanel () {
    return (
        <div className={panel.left_panel}>

            <img src={logo} alt="logo company" className={panel.logo}/>
            <p className={panel.text}>apartment renovation</p>
            <div className={panel.line}></div>

            <img src={facebook} alt="icon facebook" className={panel.social_icons}/>
            <img src={instagram} alt="icon instagram" className={panel.social_icons}/>
            <img src={telegram} alt="icon telegram" className={panel.social_icons}/>
            <img src={youtube} alt="icon youtube" />

        </div>
    )
}

export default LeftPanel;