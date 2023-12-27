import React, { Component } from "react";
import styles from "../Styles/screen.module.css";
import Menu from "./Menu";
import Coverflow from "./Coverflow";
import Music from "./Music";
import Settings from "./Settings";
import Games from "./Games";

export default class Screen extends Component {
  render() {
    const { menu, musicMenu, coverflow } = this.props;

    const showMenu = () => {
      return (
        <Menu
          menu={menu}
        />
      );
    };

    const showScreenContent = () => {
      switch (menu.selectedMenuItem.menuItem) {
        case "Coverflow":
          return (
            <Coverflow
              coverflow={coverflow}
              selectedMenuItem={menu.selectedMenuItem}
            />
          );
        case "Music":
          return (
            <Music
              musicMenu={musicMenu}
            />
          );
        case "Games":
          return (
            <Games />
          );
        case "Settings":
          return (
            <Settings />
          );
      }
    };

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
