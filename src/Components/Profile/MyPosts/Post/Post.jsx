import React from "react";
import style from "./Post.module.css";

const Post = ({ likes, message }) => (
  <div className={style.post}>
    <div className={style.avacont}>
      <img className={style.ava} src='https://ip1.anime-pictures.net/direct-images/d41/d4184d70b207d420471bc2a14fe92e19.jpg?if=ANIME-PICTURES.NET_-_354153-1000x1000-kantai+collection-akatsuki+destroyer-azuuru-single-long+hair-looking+at+viewer.jpg' alt="ava"></img>
    </div>
    <div className={style.parea}>
      <p className={style.text}>{message}</p>
      <div className={style.reaction}>
        <span>{likes} like</span>
      </div>
    </div>
  </div>
)

export default Post;