import React, { useEffect, useState } from "react";
import Post from "./Post";
// import { posts } from "../fakeData/data";
import { getPost } from "../utils/getApi";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    // const getAlgo = () => {

    // }

  useEffect(() => {
    
    const getData = async (tagTitle) => {
      let posts = null;
      if (tagTitle) {
         posts = await getPost(tagTitle);
      }else{
         posts = await getPost();
      }
        setPosts(posts.data)
    }

    getData();
  }, []);

  return (
    <div className="posts">
      <h1>Lista de posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} setPosts={setPosts}/>
      ))}
    </div>
  );
};


export default Posts;
