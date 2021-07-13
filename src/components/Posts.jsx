import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getPost } from "../utils/getData";
import { useParams } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [showLoader, setShowLoader] = useState(true)

  let { topic } = useParams();

  useEffect(() => {
    setShowLoader(true)
    const getData = async () => {
      let posts = null;
      if (topic) {
        posts = await getPost(topic);
      } else {
        posts = await getPost();
      }
      setPosts(posts.data);
      setShowLoader(false);
    };

    getData();
  }, [topic]);

  return (
    <>
    {showLoader? <h1>Loading...</h1> :
    <section className="posts">
      <h1>Lista de posts</h1>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>}
  </>
  );
};

export default Posts;
