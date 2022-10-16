import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => (
  <div className={style.content}>
    <div>My  Posts
      <div>New Post
        <textarea className={style.new_post}></textarea>
        <button className={style.publish_btn}>Publish</button>
      </div>
      <div className={style.posts}>
        <Post likes={12} message = "Hi, Hitler 1488"/>
        <Post likes={46} message = "I'm don't nacism"/>
      </div>
    </div>
  </div>
)

export default MyPosts;