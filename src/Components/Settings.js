// Imports
import { Component } from "react";
import styles from "../Styles/settings.module.css";

// Class component for displaying the Settings on the screen.
export default class Settings extends Component{

    // Rendering Component
    render()
    {
        // Returnning JSX
        return (
            <>
            <div className={styles.settingsContainer}>
                <img src="https://cdn-icons-png.flaticon.com/128/563/563541.png" alt="settings-icon" className={styles.settingsIcon}/>
                <h2 className={styles.title}>Settings</h2>
            </div>
            </>
        )
    }
}