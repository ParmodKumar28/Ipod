// Imports
import { Component } from "react";
import MenuItem from "./Menu-Item";
import styles from "../Styles/menu.module.css"

// Class component for displaying the menu in the screen to control and use features of the ipod.
export default class Menu extends Component{

    // Rendering Component
    render()
    {
        // Props
        const {menu} = this.props;
        const musicMenu = menu.musicMenu;

        // Menu hide and unhide custom style.
        const menuStyle = {
            transition: "opacity 0.5s ease-in-out",
            opacity: menu.menuVisible ? 1 : 0,
          };

        let menuHeading = menu.menuType === "Music" ? ( musicMenu.activeMenuItem >= 0 ?  musicMenu.menuItems[musicMenu.activeMenuItem] : "Music")  : (menu.activeMenuItem >= 0 ? menu.menuItems[menu.activeMenuItem] : "iPod.js");

        // Returning JSX
        return (
            <>
            <div className={styles.menuContainer} style={menuStyle}>
            <h2>{menuHeading}</h2>
            <ul className={styles.menu}>
            {menu.menuType === "Music"
            ? musicMenu.menuItems.map((item, i) => ( 
              <MenuItem
                key={i}
                item={item}
                activeMenuItem={musicMenu.activeMenuItem}
                index={i}
              />
            ))
            : menu.menuItems.map((item, i) => ( 
              <MenuItem
                key={i}
                item={item}
                activeMenuItem={menu.activeMenuItem}
                index={i}
              />
            ))}
            </ul>
            {menu.menuType === "Music" && (
            <p>Back Main Menu <img src="https://cdn-icons-png.flaticon.com/128/4211/4211379.png" alt="icon" className={styles.back}/> Press</p>
            )}
            </div>
            </>
        )
    }
}