// Imports
import React, { Component } from "react";
import styles from "../Styles/screen.module.css";
import Menu from "./Menu";
import Coverflow from "./Coverflow";
import Music from "./Music";
import Settings from "./Settings";
import Games from "./Games";
import Artists from "./Artists";
import Playlists from "./Playlists";
import AllSongs from "./All-Songs";


// Class component for the screen to display items.
export default class Screen extends Component {
  // Rendering JSX
  render() {
    // Props
    const { menu, coverflow, songs} = this.props;

    // Function to show the menu.
    const showMenu = () => {
      return (
        <Menu
          menu={menu}
        />
      );
    };

    // Function to show the screen content here.
    const showScreenContent = () => {
      if (menu.menuType === "Menu") {
        switch (menu.selectedMenuItem.menuItem) {
          case "Coverflow":
            return (
              <Coverflow
                coverflow={coverflow}
                selectedMenuItem={menu.selectedMenuItem}
              />
            );
          case "Music":
            return <Music menu={menu} />;
          case "Games":
            return <Games />;
          case "Settings":
            return <Settings />;
          default:
            return null;
        }
      } else if (menu.menuType === "Music") {
        switch (menu.musicMenu.selectedMenuItem.menuItem) {
          case "Artists":
            return <Artists selectedMenuItem={menu.musicMenu.selectedMenuItem}/>
          case "All Songs":
            return <AllSongs songs={songs}/>
            break;
          case "Playlists":
            return <Playlists selectedMenuItem={menu.musicMenu.selectedMenuItem}/>
            break;
          default:
            return null;
        }
      }
    };

    // Returning JSX
    return (
      <div className={styles.screenContainer} 
      style={{
        backgroundImage: `url(${coverflow.wallpapers[coverflow.activeWallpaper]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        }}>
        {menu.menuVisible ? showMenu() : showScreenContent()}
      </div>
    );
  }
}
