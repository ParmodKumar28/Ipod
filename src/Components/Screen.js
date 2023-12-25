// Imports
import { Component } from "react";
import styles from "../Styles/screen.module.css"
import Menu from "./Menu";

// Class component for displaying the screen of the ipod.
export default class Screen extends Component{

    // Rendering Component
    render()
    {
        const {menuItems, activeMenuItem ,menuVisible} = this.props;

        // Returnning JSX
        return (
            <>
            <div className={styles.screenContainer}>
                <Menu menuItems={menuItems} activeMenuItem={activeMenuItem} menuVisible={menuVisible}/>
            </div>
            </>
        )
    }
}