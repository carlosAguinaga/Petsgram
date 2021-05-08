import React, { useEffect, useState } from "react";
import Post from "./Post";
// import { posts } from "../fakeData/data";
import { getPost } from "../utils/getApi";

const Posts = () => {

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const getData = () => {
        const data = getPost();
        data.then(posts => setPosts(posts.data))
    }

    getData();
  }, []);

  return (
    <div className="posts">
      <h1>Lista de posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};


export default Posts;
