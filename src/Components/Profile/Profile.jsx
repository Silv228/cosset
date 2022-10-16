import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
      <div className={style.content}>
        <div>
          <div className={style.hat_content}></div>
        </div>
        <div>
          <div className={style.ava}></div>
        </div>
        <MyPosts/>
      </div>
    );
}

export default Profile;