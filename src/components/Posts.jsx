import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPost } from "../utils/getData";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  let { topic } = useParams();

  useEffect(() => {
    const getData = async () => {
      let posts = null;
      if (topic) {
        posts = await getPost(topic);
      } else {
        posts = await getPost();
      }
      setPosts(posts.data);
    };

    getData();
  }, [topic]);

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
