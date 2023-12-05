import React from "react";
import classes from "../modules/Header.module.css";
import search from "../assets/Search.png";
import home from "../assets/Home Page.png";
import favorite from "../assets/Favorite.png";
import time from "../assets/Time.png";
import movie from "../assets/Movie.png";
import notify from "../assets/Notification.png"
import settings from "../assets/Settings.png"
import logo from "../assets/Logo Green 1.png"
const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.flex}>
          <div>
            <img src={search} alt="search" className={classes.search_lens}></img>
            <input
              className={classes.search}
              placeholder="Type here to search"
            ></input>
          </div>
          <div>
            <ul className={classes.bulletStyle}>
              <li>
                <img src={home} alt="home" />
              </li>
              <li>
                <img src={favorite} alt="fav"/>
              </li>
              <li>
                <img src={time} alt="time"/>
              </li>
              <li>
                <img src={movie} alt="movie"/>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.flex}>
          <div>
            <img src={notify} alt="notif"/>
          </div>
          <div>
            <img src={settings} alt="settings"/>
          </div>
          <div>
            <img src={logo} alt="logo"/>
          </div>

        </div>

      </div>
    </>
  );
};

export default Header;
