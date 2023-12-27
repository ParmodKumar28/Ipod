// Imports
import { Component } from "react";
import styles from "../Styles/music.module.css";
import Menu from "./Menu";

// Class component for displaying the Music on the screen.
export default class Music extends Component{
    // Rendering Component
    render()
    {
        // Props
        const {menu} = this.props;

        // Returnning JSX
        return (
            <>
                <Menu
                    menu={menu}
                />
            </>
        )
    }
}