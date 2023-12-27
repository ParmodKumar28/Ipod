// Imports
import { Component } from "react";
import styles from "../Styles/playlists.module.css";

// Class component for displaying the Playlists on the screen;
export default class Playlists extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            Playlists: ["Hindi", "English", "Punjabi", "Telgu", "Marathi", "Bollywood", "Hollywood"]
        }
    }

    // Rendering Component
    render()
    {
        // State and props.
        const {selectedMenuItem} = this.props;
        const {Playlists} = this.state; 
        
        // Returnning JSX
        return (
            <>
            <div className={styles.playlistsContainer}>
            <h2 className={styles.heading}>{selectedMenuItem.menuItem}</h2>
            <ul className={styles.playlistsListContainer}>
                {Playlists.map((p, i) => (
                    <li index={i} key={i} className={styles.listItem}>{p}</li>
                ))}
            </ul>
            </div>
            </>
        )
    }
}