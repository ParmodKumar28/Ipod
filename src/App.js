// Imports
import { Component } from "react";
import Screen from "./Components/Screen";
import Buttons from "./Components/Buttons";
// Css
import styles from "./Styles/app.module.css"

// Importing Wallpapers
import wallpaper1 from "./Assets/Wallpapers/wallpaper-1.avif";
import wallpaper2 from "./Assets/Wallpapers/wallpaper-2.avif";
import wallpaper3 from "./Assets/Wallpapers/wallpaper-3.avif";
import wallpaper4 from "./Assets/Wallpapers/wallpaper-4.avif";
import wallpaper5 from "./Assets/Wallpapers/wallpaper-5.avif";
import wallpaper6 from "./Assets/Wallpapers/wallpaper-6.avif";
import wallpaper7 from "./Assets/Wallpapers/wallpaper-7.avif";
import wallpaper8 from "./Assets/Wallpapers/wallpaper-8.avif";

// Class component app parent of all the components is here.
class App extends Component{
  // Constructor to create states.
  constructor(props)
  {
    super(props)
    // Creating state
    this.state = {
      // Menu Data 
      menu: {
        menuItems: ["Coverflow", "Music", "Games", "Settings"],
        activeMenuItem: -1, // Track selected item index
        selectedMenuItem: { //Item on which we clicked ok and want to use
          index : -1,
          menuItem: ""
        },
        menuVisible: false,  
      },

      // Music menu data
      musicMenu: {
        menuItems: ["All Songs", "Artists", "Playlists"],
        activeMenuOption: -1,
        selectedMenuItem: { //Item on which we clicked ok and want to use
            index : -1,
            menuItem: ""
          },
        menuVisible: false,
      },

      // Wallpapers Data
      coverflow: {
        wallpapers: [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5, wallpaper6, wallpaper7, wallpaper8],
        activeWallpaper: 1,
      }
    }
  }

  // Function to update the menu item on rotation here.
  handleActiveMenuItemRotation = (index) => {
    let {menu} = this.state;

    if(menu.menuVisible)
    {
      menu.activeMenuItem = index;
    }

    console.log("Active item" , menu.activeMenuItem);
    // Updating state
    this.setState({
      menu
    })
  }

  // Function to hide and unhide menu on menu button click.
  handleMenuBtnClick = () => {
    let {menu} = this.state;
    menu.menuVisible = !menu.menuVisible;
    console.log(`In menu click menu visible: ${menu.menuVisible}`);

    // Updating state
    this.setState({
      menu
    });
  }

  // Handling the ok button click.
  handleOkBtnClick = () => {
    const {menu, musicMenu} = this.state;
    if(menu.menuVisible)
    {
      menu.selectedMenuItem.index = menu.activeMenuItem;
      menu.selectedMenuItem.menuItem = menu.menuItems[menu.activeMenuItem];
      menu.menuVisible = !menu.menuVisible;
    }
    if(menu.selectedMenuItem.menuItem === "Music")
    {
      menu.menuVisible = true;
      musicMenu.menuVisible = true;
    }
    
    console.log(`menu visible: ${menu.menuVisible} musicMenuVisible: ${musicMenu.menuVisible} activeMenuItem: ${menu.activeMenuItem} selectedMenuItem: ${menu.selectedMenuItem.menuItem}`);

    // Updating state
    this.setState({
      menu
    });
  }

  // Handling previous button click here.
  handlePrevBtn = () => {
    const { menu, coverflow } = this.state;
    if (menu.activeMenuItem >= 0 && menu.menuItems[menu.activeMenuItem] === "Coverflow") {
      coverflow.activeWallpaper = coverflow.activeWallpaper > 0 ? coverflow.activeWallpaper - 1 : coverflow.activeWallpaper;
      this.setState({ coverflow });
    }
  }
  
  // Handling next button click here.
  handleNextBtn = () => {
    const { menu, coverflow } = this.state;
    if (menu.activeMenuItem >= 0 && menu.menuItems[menu.activeMenuItem] === "Coverflow") {
      coverflow.activeWallpaper = coverflow.activeWallpaper < coverflow.wallpapers.length - 1 ? coverflow.activeWallpaper + 1 : coverflow.activeWallpaper;
      this.setState({ coverflow });
    }
  }



  // Calling render function here.
  render()
  {
    const {menu, musicMenu, coverflow} = this.state;

    // Returning Jsx
    return (
      <>
      {/* Ipod Container */}
      <div className={styles.ipodContainer}>
        <Screen 
          menu={menu}
          musicMenu={musicMenu}
          coverflow={coverflow}
          />

        <Buttons 
          menu={musicMenu.menuVisible ? musicMenu : menu}
          handleActiveMenuItemRotation={this.handleActiveMenuItemRotation} 
          handleMenuBtnClick={this.handleMenuBtnClick}
          handleOkBtnClick={this.handleOkBtnClick}
          handlePrevBtn={this.handlePrevBtn}
          handleNextBtn={this.handleNextBtn} 
          />
      </div>
      </>
    )
  }
}


// Exporting App to use in index.js.
export default App;