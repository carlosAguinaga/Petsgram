import "../styles/post.css";
import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";
import ModalProfile from "./ModalProfile";
import { getComments } from "../utils/getData";

const Post = ({ post }) => {
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [totalComments, setTotalComments] = useState('')

  useEffect(() => {
    getComments(post.id).then((res) => setTotalComments(res.total));
  }, [post.id])


  return (
    <article className="post">
      <ModalProfile
        open={isOpenProfile}
        onClose={() => setIsOpenProfile(false)}
        owner={post.owner}
      />
      <div className="post__header">
        <img
          className="post__header-img"
          src={post.owner.picture}
          alt={post.owner.firstName}
          onClick={() => {
            setIsOpenProfile(true);
          }}
        />
        <h3
          className="post__header-title"
          onClick={() => {
            setIsOpenProfile(true);
          }}
        >
          {post.owner.firstName}
        </h3>
      </div>
      <img src={post.image} alt="" />
      <div className="conatainer-description">
        <div className="fav-container">
          <FcLike />
          <span>{post.likes}</span>
        </div>
        <div className="text-post">
          <p className="text">
          <span className="author">
            {post.owner.firstName}
          </span>
            {post.text}
          </p>
        </div>
        <div className="tags-post">
          {post.tags.map((tag, i) => (
            <Link to={`/${tag}`} key={i} className="tag">{`${tag}`}</Link>
          ))}
        </div>
        <div className="date-post">
          <span>{post.publishDate.slice(0, 10)}</span>
        </div>
        <div className="link-post">
          <a href={post.link}>{post.link}</a>
        </div>
        <div className="comments">
          <Link to={`/comments/${post.id}`}>{`${totalComments} Comentatios`}</Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
