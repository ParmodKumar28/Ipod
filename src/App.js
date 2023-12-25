// Imports
import { Component } from "react";
import Screen from "./Components/Screen";
import Buttons from "./Components/Buttons";
// Css
import styles from "./Styles/app.module.css"

// Class component app parent of all the components is here.
class App extends Component{
  // Constructor to create states.
  constructor(props)
  {
    super(props)
    // Creating state
    this.state = {
      menuItems: ["Coverflow", "Music", "Games", "Settings"],
      activeMenuItem: -1, // Track selected item index
      menuVisible: false
    }
  }

  // Function to update the menu item on rotation here.
  handleMenuItemSelected = (index) => {
    this.setState({
      activeMenuItem: index
    })
  }

  // Function to hide and unhide menu on menu button click.
  handleMenuButtonClick = () => {
    let {menuVisible} = this.state;
    menuVisible = !menuVisible;
    this.setState({
      menuVisible
    });
  }

  // Calling render function here.
  render()
  {
    const {menuItems, activeMenuItem, menuVisible} = this.state;

    // Returning Jsx
    return (
      <>
      {/* Ipod Container */}
      <div className={styles.ipodContainer}>
        <Screen menuItems = {menuItems} activeMenuItem={activeMenuItem} menuVisible={menuVisible}/>
        <Buttons menuItems = {menuItems} activeMenuItem={activeMenuItem} // Pass selected item index
          handleMenuItemSelected={this.handleMenuItemSelected} handleMenuButtonClick={this.handleMenuButtonClick} menuVisible={menuVisible}/>
      </div>
      </>
    )
  }
}


// Exporting App to use in index.js.
export default App;