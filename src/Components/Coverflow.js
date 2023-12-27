// Imports
import { Component } from "react";
import styles from "../Styles/coverflow.module.css";

// Class component for displaying the Coverflow wallpapers on the screen.
export default class Coverflow extends Component{

    // Rendering Component
    render()
    {
        const {coverflow, selectedMenuItem} = this.props;

        const activeWallpaper = coverflow.activeWallpaper;

        // Returnning JSX
        return (
            <>
            <div className={styles.coverflowContainer}>
            <h2 className={styles.heading}>{selectedMenuItem.menuItem}</h2>
            <div className={styles.wallpapersContainer}>
                {coverflow.wallpapers.map((w, i) => (
                    <img src={w} key={i} index={i} alt="wallpaper" className={i===activeWallpaper ? `${styles.wallpaper} ${styles.active}` : styles.wallpaper} id={styles.active}/>
                ))}
            </div>
            </div>
            </>
        )
    }
}