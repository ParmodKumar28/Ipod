// Imports
import React, { Component } from "react";
import styles from "../Styles/buttons.module.css"
import ZingTouch from "zingtouch";


// Class component for displaying the keypad buttons to control ipod.
export default class Buttons extends Component{
    constructor(props){
        super(props);
        this.rollerRef = React.createRef();
    }

    componentDidMount() {
        const { handleMenuItemSelected, menuItems, activeMenuItem, menuVisible} = this.props;
    
        // Accessing the roller DOM element using the ref.
        const rollerElement = this.rollerRef.current;
    
        // Region where zingtouch will work.
        const activeRegion = new ZingTouch.Region(rollerElement);
    
        let initialDistance = 0; // Track initial distance for rotation direction
        let selectedIndex = activeMenuItem;
    
        activeRegion.bind(rollerElement, "rotate", (event) => {
              const rotation = Math.abs(event.detail.distanceFromOrigin - initialDistance);
              const rotationThreshold = 45; // Set your preferred threshold
        
              if (rotation > rotationThreshold) {
                if (initialDistance < event.detail.distanceFromOrigin) {
                  // Clockwise rotation
                  selectedIndex = (selectedIndex + 1) % menuItems.length;
                } else {
                  // Anti-clockwise rotation
                  selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
                }
                handleMenuItemSelected(selectedIndex);
                initialDistance = event.detail.distanceFromOrigin; // Update initial distance
              }
        });
    }

    // Rendering Component
    render()
    {

        // Returnning JSX
        return (
            <>
            <div className={styles.buttonsContainer}>
                <div ref={this.rollerRef} className={styles.roller}>
                <div className={styles.menu} onClick={this.props.handleMenuButtonClick}>
                    MENU
                </div>
                <div className={styles.next}>
                <img src="https://cdn-icons-png.flaticon.com/128/4211/4211373.png"/>
                </div>
                <div className={styles.play}>
                <img src="https://cdn-icons-png.flaticon.com/128/4211/4211344.png"/>
                </div>
                <div className={styles.prev}>
                <img src="https://cdn-icons-png.flaticon.com/128/4211/4211379.png"/>
                </div>
                <div className={styles.innerBtn} onClick={this.props.menuVisible ? null: this.props.handleMenuButtonClick}>
                </div>
                </div>
            </div>
            </>
        )
    }
}