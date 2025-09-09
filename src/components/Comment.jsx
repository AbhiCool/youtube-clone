import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="my-2 ">
      <div className="flex gap-2">
        <FaUserCircle size="30" className="cursor-pointer" />
        <div>
          <p className="text-sm font-semibold">@{comment.name}</p>
          <p className="text-sm">{comment.comment}</p>
        </div>
      </div>
      {comment.replies?.length > 0 && (
        <div className="ml-6 border-l-1 border-gray-300 pl-2">
          {comment.replies?.map((reply) => (
            <Comment key={reply.id} comment={reply}></Comment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
