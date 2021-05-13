import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPost } from "../utils/getData";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    const getData = async (tagTitle) => {
      let posts = null;
      if (tagTitle) {
        posts = await getPost(tagTitle);
      } else {
        posts = await getPost();
      }
      setPosts(posts.data);
    };

    getData();
  }, []);


  return (
    <section className="posts">
      <h1>Lista de posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} setPosts={setPosts} />
      ))}
    </section>
  );
};

export default Posts;
