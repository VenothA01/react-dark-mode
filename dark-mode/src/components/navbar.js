import React from "react";
import { Link } from 'react-router-dom'
import { useTheme, } from "../theme-context";

const NavBar = () =>{

    const {theme,toggleTheme} = useTheme();
    console.log(theme)

    return(
        <nav class="navbar">
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">blog</Link>
            </div>
            <div class='mode'>
              <label>
              <input type='checkbox' onChange={toggleTheme} checked={theme=='dark'} />
              </label>
              <span class='slider round' />
            </div>
           
        </nav>
    )
};

export default NavBar;