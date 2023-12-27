// Imports
import { Component } from "react";
import styles from "../Styles/games.module.css";

// Class component for displaying the Games on the screen.
export default class Games extends Component{

    // Rendering Component
    render()
    {
        // Returnning JSX
        return (
            <>
            <div className={styles.gameContainer}>
                <img src="https://cdn-icons-png.flaticon.com/128/2331/2331852.png" alt="game-icon" className={styles.gameIcon}/>
                <h2 className={styles.title}>Games</h2>
            </div>
            </>
        )
    }
}