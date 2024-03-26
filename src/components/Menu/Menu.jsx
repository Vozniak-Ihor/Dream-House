import menuIcon from "../../icons/menu.svg"
import menu from "./Menu.module.css"

function Menu () {
    return(
        <img src={menuIcon} alt="icon menu" className={menu.icon_menu} />
    )
}

export default Menu;