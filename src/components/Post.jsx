import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { getPost, getPostComment } from "../utils/getApi";
import Modal from "./Modal";
import ModalProfile from "./ModalProfile";

const Post = ({ post, setPosts }) => {
  const [comments, setComments] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  useEffect(() => {
    getPostComment(post.id).then((res) => setComments(res));
  }, [post.id]);

  const getPostForTag = async (tagTitle) => {
    const posts = await getPost(tagTitle);
    setPosts(posts.data);
  };

  return (
    <article className="post">
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        comments={comments}
      />
      <ModalProfile
        open={isOpenProfile}
        onClose={() => setIsOpenProfile(false)}
        owner={post.owner}
      />
      <div className="post__header">
        <img src={post.owner.picture} alt="" onClick={() => {setIsOpenProfile(true)}} />
        <h2 onClick={() => {setIsOpenProfile(true)}}>{post.owner.firstName}</h2>
      </div>
      <img src={post.image} alt="" />
      <div className="conatainer-description">
        <div>
          <FcLike />
          {post.likes}
        </div>
        <div>
          <span style={{ color: "#000", fontSize: 20 }}>
            {post.owner.firstName}{" "}
          </span>
          <span>texto del post</span>
        </div>
        <div className="tags">
          {post.tags.map((tag, i) => (
            <span key={i} onClick={() => getPostForTag(tag)}>
              {" "}
              {tag}{" "}
            </span>
          ))}
        </div>
        <div>
          <span>{post.publishDate}</span>
        </div>
        <div>
          <a href={post.link}>{post.link}</a>
        </div>
        <div className="comments">
          <span onClick={() => setIsOpen(true)}>
            {comments.total} comentarios
          </span>
        </div>
      </div>
    </article>
  );
};

export default Post;
