// Imports
import { Component } from "react";
import MenuItem from "./Menu-Item";
import styles from "../Styles/menu.module.css"

// Class component for displaying the menu in the screen to control and use features of the ipod.
export default class Menu extends Component{

    // Rendering Component
    render()
    {

        const {menu} = this.props;

        // Menu hide and unhide custom style.
        const menuStyle = {
            transition: "opacity 0.5s ease-in-out",
            opacity: menu.menuVisible ? 1 : 0,
          };

        let menuHeading = menu.menuItems[menu.activeMenuItem];

        // Returnning JSX
        return (
            <>
            <div className={styles.menuContainer} style={menuStyle}>
            <h2>{menu.activeMenuItem >= 0 ? menuHeading : "iPod.js"}</h2>
            <ul className={styles.menu}>
                {menu.menuItems.map((item, i) => 
                <MenuItem key={i} item={item} activeMenuItem={menu.activeMenuItem} index={i}/>
                )}
            </ul>
            </div>
            </>
        )
    }
}