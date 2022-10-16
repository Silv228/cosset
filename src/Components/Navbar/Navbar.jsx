import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return(
      <nav className={style.nav}>
        <ul>
          <li><a href='#profile'>Profie</a></li>
          <li><a href='#messages'>Messages</a></li>
          <li><a href='#news'>News</a></li>
          <li><a href='#music'>Music</a></li>
          <li><a href='#settings'>Settings</a></li>
        </ul>
      </nav>
    );
}

export default Navbar;