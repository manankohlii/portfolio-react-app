import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'

const toolbar = props => (
    <header className = "toolbar">
        <nav className = "toolbar_navigation">
            <div className = "toolbar_toggle_button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className = "toolbar_logo"><a href= "/">PK</a></div>
            <div className ="spacer"></div>
            <div className = "toolbar_navigation-items">
                <Router>
                <ul>
                    <li><Link to='/' className="links">Home</Link></li>
                    <li><Link to='/about' className="links">About Me</Link></li>
                    <li><Link to='/contact' className="links">Contact</Link></li>
                </ul>
                </Router>
            </div>
        </nav>
    </header>
);

export default toolbar;
