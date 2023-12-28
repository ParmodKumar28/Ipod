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

// Importing Songs
import allSongsData from "./songs-data";

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
        menuType : "Menu",
        // Music menu data
        musicMenu: {
        menuItems: ["All Songs", "Artists", "Playlists"],
        activeMenuItem: -1,
        selectedMenuItem: { //Item on which we clicked ok and want to use
            index : -1,
            menuItem: ""
          },
        menuVisible: false,
      }, 
    },
    
      // Wallpapers Data
      coverflow: {
        wallpapers: [wallpaper1, wallpaper2, wallpaper3, wallpaper4, wallpaper5, wallpaper6, wallpaper7, wallpaper8],
        activeWallpaper: 1,
      },

      // All Songs
      songs: {
        allSongs: allSongsData,
        currentSongIndex: 0,
        isPlaying: false,
      }
    }
  }

  // Function to update the menu item on rotation here.
  handleActiveMenuItemRotation = (index) => {
    let {menu} = this.state;

    if(menu.menuVisible)
    {
      menu.menuType === "Menu" ? menu.activeMenuItem = index : menu.musicMenu.activeMenuItem = index;
    }

    // Updating state
    this.setState({
      menu
    })
  }

  // Function to hide and unhide menu on menu button click.
  handleMenuBtnClick = () => {
    let {menu} = this.state;
    menu.menuVisible = !menu.menuVisible;

    // Updating state
    this.setState({
      menu
    });
  }

  // Handling the ok button click.
  handleOkBtnClick = () => {
    const {menu} = this.state;
    const musicMenu = menu.musicMenu;
    if(menu.menuVisible)
    {
      menu.menuType === "Menu" ? (menu.selectedMenuItem.index = menu.activeMenuItem) : (musicMenu.selectedMenuItem.index = musicMenu.activeMenuItem);
      menu.menuType === "Menu" ? (menu.selectedMenuItem.menuItem = menu.menuItems[menu.activeMenuItem]) : (musicMenu.selectedMenuItem.menuItem = musicMenu.menuItems[musicMenu.activeMenuItem]);
      menu.menuVisible = !menu.menuVisible;
      musicMenu.menuVisible = !musicMenu.menuVisible;
    }
    if(menu.selectedMenuItem.menuItem === "Music")
    {
      menu.menuVisible = true;
      menu.musicMenu.menuVisible = true;
      menu.menuType = "Music";
    }
    if(menu.menuType === "Music" && menu.menuVisible === true && musicMenu.selectedMenuItem.index >= 0)
    {
      menu.menuVisible = false;
      menu.musicMenu.menuVisible = false;
    }

    // Updating state
    this.setState({
      menu
    });
  }

  // Handling previous button click here.
  handlePrevBtn = () => {
    const { menu, coverflow, songs } = this.state;
    const musicMenu = menu.musicMenu;
  
    if (menu.activeMenuItem >= 0 && menu.menuItems[menu.activeMenuItem] === "Coverflow") {
      coverflow.activeWallpaper = coverflow.activeWallpaper > 0 ? coverflow.activeWallpaper - 1 : coverflow.activeWallpaper;
      this.setState({ coverflow });
    }
  
    if (menu.menuType === "Music") {
      if (musicMenu.selectedMenuItem.menuItem === "All Songs") {
        const prevIndex = songs.currentSongIndex > 0 ? songs.currentSongIndex - 1 : songs.allSongs.length - 1;
        songs.currentSongIndex = prevIndex;
        this.setState({ songs });
      } else {
        menu.menuType = "Menu";
        this.setState({ menu });
      }
    }

    if(menu.menuType === "Music" && musicMenu.selectedMenuItem.menuItem === "All Songs" && menu.menuVisible === true)
    {
      menu.menuType = "Menu";
      this.setState({ menu });
    }
    
  };
  

  // Handling next button click here.
  handleNextBtn = () => {
    const { menu, songs } = this.state;
    const musicMenu = menu.musicMenu;
  
    if (menu.activeMenuItem >= 0 && menu.menuItems[menu.activeMenuItem] === "Coverflow") {
      const { coverflow } = this.state;
      coverflow.activeWallpaper = coverflow.activeWallpaper < coverflow.wallpapers.length - 1
        ? coverflow.activeWallpaper + 1
        : coverflow.activeWallpaper;
      this.setState({ coverflow });
    }
  
    if (menu.menuType === "Music" && musicMenu.selectedMenuItem.menuItem === "All Songs") {
      const nextIndex = (songs.currentSongIndex + 1) % songs.allSongs.length;
      songs.currentSongIndex = nextIndex;
      this.setState({ songs });
    }
  };

  // Function to play/pause the audio
  togglePlayPause = () => {
    const { menu, songs } = this.state;
    if(menu.musicMenu.selectedMenuItem.menuItem === "All Songs")
    {
      songs.isPlaying = !songs.isPlaying;
      this.setState({ songs });
    }
  };

  // Calling render function here.
  render()
  {
    const {menu,coverflow, songs} = this.state;

    // Returning Jsx
    return (
      <>
      {/* Ipod Container */}
      <div className={styles.ipodContainer}>
        <Screen 
          menu={menu}
          coverflow={coverflow}
          songs={songs}
          />

        <Buttons 
          menu={menu}
          songs={songs}
          handleActiveMenuItemRotation={this.handleActiveMenuItemRotation} 
          handleMenuBtnClick={this.handleMenuBtnClick}
          handleOkBtnClick={this.handleOkBtnClick}
          handlePrevBtn={this.handlePrevBtn}
          handleNextBtn={this.handleNextBtn}
          togglePlayPause={this.togglePlayPause}
          />
      </div>
      </>
    )
  }
}


// Exporting App to use in index.js.
export default App;