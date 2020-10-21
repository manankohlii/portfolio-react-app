import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/Sidebar/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import { BrowserRouter as Router , Route , NavLink} from "react-router-dom"
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'

class App extends Component {
  state= {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () =>{
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };
  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen:false})
  }
  render(){
    
    
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
        <div style={{height:'100%'}}>
         
        <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{marginTop:'56px'}}>
        <Home />
        <AboutMe />
        <Contact />
        </main>
       
      </div>
     
    );
  }
}
export default App;
