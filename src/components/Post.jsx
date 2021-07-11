import "../styles/post.css";
import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import { getComments } from "../utils/getData";

const Post = ({ post }) => {
  let location = useLocation();
  const [totalComments, setTotalComments] = useState("");

  useEffect(() => {
    getComments(post.id).then((res) => setTotalComments(res.total));
  }, [post]);

  return (
    <article className="post">
      <div className="post__header">
        <Link
          to={{
            pathname: "/profile/user",
            state: { background: location, owner: post.owner },
          }}
        >
          <img
            className="post__header-img"
            src={post.owner.picture}
            alt={post.owner.firstName}
          />
        </Link>

        <Link
          to={{
            pathname: "/profile/user",
            state: { background: location, owner: post.owner },
          }}
        >
          <h3 className="post__header-title">{post.owner.firstName}</h3>
        </Link>
      </div>
      <img src={post.image} alt="" />
      <div className="conatainer-description">
        <div className="fav-container">
          <FcLike />
          <span>{post.likes}</span>
        </div>
        <div className="text-post">
          <p className="text">
            <span className="author">{post.owner.firstName}</span>
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
          <Link
            to={{
              pathname: `/comments/${post.id}`,
              state: { background: location },
            }}
          >{`${totalComments} Comentatios`}</Link>
        </div>
      </div>
    </article>
  );
};

export default Post;
