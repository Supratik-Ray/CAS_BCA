import React, { useRef, useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaBookmark, FaRegBookmark, FaComment, FaShare } from "react-icons/fa";
import gsap from "gsap";
import ProjectDesription from "./ProjectDesription";
import { useAuth } from "../hooks/useAuth";
import CommentBox from "./CommentBox";

const PostCard = ({
  id,
  createdAt,
  description,
  image,
  title,
  author,
  authorId,
  github,
  liveLink,
  likes,
  saves,
  shares,
  comments,
  hasLiked,
}) => {
  const { token } = useAuth();
  const [liked, setLiked] = useState(hasLiked);
  const [saved, setSaved] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [descOpen, setDescOpen] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const saveRef = useRef(null);
  const likeRef = useRef(null);

  const toggleLike = async () => {
    gsap.fromTo(
      likeRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.4,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "bounce.out",
      }
    );

    const url = `https://cas-bca.onrender.com/api/v1/projects/${id}/likes`;

    try {
      if (!liked) {
        setLiked(true);
        setLikeCount((prev) => prev + 1);
        await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log("successfully liked");
      } else {
        setLiked(false);
        setLikeCount((prev) => prev - 1);
        await fetch(url, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log("successfully unliked");
      }
    } catch (err) {
      console.error("failed to unlike", err.message);
      setLiked((prev) => !prev);
      setLikeCount((prev) => (liked ? prev + 1 : prev - 1));
    }
  };

  const toggleSave = () => {
    setSaved(!saved);
    gsap.fromTo(
      saveRef.current,
      {
        scale: 1,
      },
      {
        scale: 1.4,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "bounce.out",
      }
    );
  };

  const handleShare = () => {};

  return (
    <div className="rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition p-4 ">
      <img
        onClick={() => setDescOpen(true)}
        className="w-full h-48 object-cover rounded-xl cursor-pointer "
        src={image}
        alt={title}
      />
      <h1 className="text-lg font-bold mt-3">{title}</h1>
      <p className="text-sm mb-2 -mt-1.5 text-gray-500 ">By {author}</p>
      <div className="flex items-center justify-between mb-3">
        <a href={liveLink}>
          <button className="bg-blue-900 text-white rounded-xl px-3 py-1 hover:bg-blue-950 cursor-pointer">
            Live Demo
          </button>
        </a>
        <a href={github}>
          <button className="bg-amber-400 text-white rounded-xl px-3 py-1 hover:bg-amber-500 cursor-pointer">
            GitHub
          </button>
        </a>
      </div>

      {/* like button */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <button onClick={toggleLike} className="cursor-pointer">
          <span ref={likeRef} className="inline-block">
            {liked ? (
              <AiFillLike className="text-blue-500 text-lg  " />
            ) : (
              <AiOutlineLike className="hover:text-blue-500 text-lg" />
            )}
            <span>{likeCount}</span>
          </span>
        </button>

        {/* save button */}
        <button onClick={toggleSave} className="cursor-pointer">
          <span ref={saveRef} className="inline-block">
            {saved ? (
              <FaBookmark className="text-red-500 text-lg" />
            ) : (
              <FaRegBookmark className="hover:text-red-500 text-lg" />
            )}
            <span>{saves}</span>
          </span>
        </button>

        <button onClick={handleShare} className="cursor-pointer text-blue-500 ">
          <span>
            <FaShare />
          </span>
          <span>{shares}</span>
        </button>

        {/* comment section */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-purple-500 cursor-pointer"
        >
          <span>
            <FaComment className="text-lg" />
          </span>
          {/* <span>{comments.len}</span> */}
        </button>
      </div>

      <CommentBox id={id} isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <ProjectDesription
        title={title}
        author={author}
        description={description}
        isOpen={descOpen}
        onClose={() => setDescOpen(false)}
      />
    </div>
  );
};

export default PostCard;
