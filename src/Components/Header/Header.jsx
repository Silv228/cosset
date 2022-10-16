import React from "react";
import style from './Header.module.css';

const Header = () => {
    return(
      <header className={style.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Epcot_Japan_logo.svg/1200px-Epcot_Japan_logo.svg.png" alt="logo" className={style.logo}></img>      
      </header> 
    );
}

export default Header;