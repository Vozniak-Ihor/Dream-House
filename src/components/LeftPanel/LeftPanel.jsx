import logo from "../../icons/logo.svg"
import facebook from "../../icons/facebook.svg"
import instagram from "../../icons/instagram.svg"
import telegram from "../../icons/telegram.svg"
import youtube from "../../icons/youtube.svg"

import panel from "./LeftPanel.module.css";

function LeftPanel () {
    return (
        <div className={panel.left_panel}>

            <img src={logo} alt="logo company" />
            <p className={panel.text}>apartment renovation</p>
            <div className={panel.line}></div>

            <img src={facebook} alt="icon facebook" />
            <img src={instagram} alt="icon instagram" />
            <img src={telegram} alt="icon telegram" />
            <img src={youtube} alt="icon youtube" />

        </div>
    )
}

export default LeftPanel;