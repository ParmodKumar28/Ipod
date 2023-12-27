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

    // Component updating here.
    componentDidUpdate() {
        const { menu, handleActiveMenuItemRotation } = this.props;
        const musicMenu = menu.musicMenu;
    
        if (menu.menuVisible) {
          // Accessing the roller DOM element using the ref.
          const rollerElement = this.rollerRef.current;
    
          // Region where zingtouch will work.
          const activeRegion = new ZingTouch.Region(rollerElement);
    
          let initialDistance = 0; // Track initial distance for rotation direction
          let selectedIndex =
            menu.menuType === "Menu"
              ? menu.activeMenuItem
              : musicMenu.activeMenuItem;
    
          // Binding rotate event to the roller element
          activeRegion.bind(rollerElement, "rotate", (event) => {
            const rotation = Math.abs(event.detail.distanceFromOrigin - initialDistance);
            const rotationThreshold = 45; // Set your preferred threshold
    
            if (rotation > rotationThreshold) {
              if (initialDistance < event.detail.distanceFromOrigin) {
                // Clockwise rotation
                selectedIndex =
                  (selectedIndex + 1) %
                  (menu.menuType === "Menu"
                    ? menu.menuItems.length
                    : musicMenu.menuItems.length);
              } else {
                // Anti-clockwise rotation
                selectedIndex =
                  (selectedIndex - 1 +
                    (menu.menuType === "Menu"
                      ? menu.menuItems.length
                      : musicMenu.menuItems.length)) %
                  (menu.menuType === "Menu"
                    ? menu.menuItems.length
                    : musicMenu.menuItems.length);
              }
              handleActiveMenuItemRotation(selectedIndex);
              initialDistance = event.detail.distanceFromOrigin; // Update initial distance
            }
          });
        }
      }

    // Rendering Component
    render()
    {
        // Props
        const {handleMenuBtnClick, handleOkBtnClick, handlePrevBtn, handleNextBtn, togglePlayPause, songs} = this.props;

        // Returnning JSX
        return (
            <>
            <div className={styles.buttonsContainer}>
                <div ref={this.rollerRef} className={styles.roller}>
                <div className={styles.menu} onClick={handleMenuBtnClick}>
                    MENU
                </div>
                <div className={styles.next} onClick={handleNextBtn}>
                <img src="https://cdn-icons-png.flaticon.com/128/4211/4211373.png"/>
                </div>
                <div className={styles.play} onClick={togglePlayPause}>
                <img src={songs.isPlaying ? "https://cdn-icons-png.flaticon.com/128/4211/4211362.png"
                 : "https://cdn-icons-png.flaticon.com/128/4211/4211344.png"}
                alt={songs.isPlaying ? "Pause Icon" : "Play Icon"}
                />
                </div>
                <div className={styles.prev} onClick={handlePrevBtn}>
                <img src="https://cdn-icons-png.flaticon.com/128/4211/4211379.png"/>
                </div>
                <div className={styles.innerBtn} onClick={handleOkBtnClick}>
                </div>
                </div>
            </div>
            </>
        )
    }
}