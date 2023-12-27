// Imports
import { Component } from "react";
import styles from "../Styles/menu-item.module.css";

// Class component for displaying the menu-Item On the screen to control and use features of the ipod.
export default class MenuItem extends Component{

    // Rendering Component
    render()
    {
        // Props
        const {item, activeMenuItem, index} = this.props;
        // Returnning JSX
        return (
            <>
            <li className={styles.item} id={activeMenuItem === index ? styles.selected : ""}>
                {activeMenuItem === index ? (
                <>
                {item}
                <img src="https://cdn-icons-png.flaticon.com/128/8213/8213522.png" alt="selected" className={styles.arrow}/>
                </>
                ) : (item)}</li>
            </>
        )
    }
}