// Imports
import { Component } from "react";
import styles from "../Styles/artists.module.css";

// Importing artists
import Artist1 from "../Assets/Artists/Artist1.avif";
import Artist2 from "../Assets/Artists/Artist2.jpeg";
import Artist3 from "../Assets/Artists/Artist3.jpeg";
import Artist4 from "../Assets/Artists/Artist4.jpeg";
import Artist5 from "../Assets/Artists/Artist5.jpeg";
import Artist6 from "../Assets/Artists/Artist6.jpeg";

// Class component for displaying the Artists on the screen.
export default class Artists extends Component{
    // Constructor
    constructor(props)
    {
        super(props);
        this.state = {
            Artists: [Artist1, Artist2, Artist3, Artist4, Artist5, Artist6]
        }
    }

    // Rendering Component
    render()
    {
        // State and props
        const {Artists} = this.state;
        const {selectedMenuItem} = this.props;

        // Returning JSX
        return (
            <>
            <div className={styles.artistsContainer}>
            <h2 className={styles.heading}>{selectedMenuItem.menuItem}</h2>
            <div className={styles.wallpapersContainer}>
                {Artists.map((a, i) => (
                    <img src={a} key={i} index={i} alt="Artists" className={styles.wallpaper}/>
                ))}
            </div>
            </div>
            </>
        )
    }
}