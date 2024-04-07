import { HiDotsVertical } from "react-icons/hi";
import LikeSection from "./LikeSection";
import CommentSection from "./CommentSection";
export default function Post({ post }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5 border-b border-gray-100">
        <img
          className="rounded-full h-12 object-cover border p-1 ml-3"
          src={post.profileImg}
          alt={post.username}
        />
        <p className="font-bold flex-1 ">{post.username}</p>
        <HiDotsVertical className="h-5 cursor-pointer" />
      </div>
      <img
        src={post.image}
        alt={post.caption}
        className="object-cover w-full"
      />
      <LikeSection id={post.id} />
      <p className="p-5 truncate">
        {" "}
        <span className="font-bold mr-2">{post.username}</span>
        {post.caption}
      </p>
      <CommentSection id={post.id}/>
    </div>
  );
}