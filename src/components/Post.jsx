import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__header">
        <img src={post.owner.picture} alt="" />
        <h2>{post.owner.firstName}</h2>
      </div>
      <img src={post.image} alt="" />
      <div className="conatainer-description">
        <h3>{post.owner.firstName}</h3>
        <p>comentarios</p>
      </div>
    </div>
  );
};

export default Post;
