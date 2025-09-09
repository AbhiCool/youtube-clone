import React from "react";

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <div className="my-2 ">
      <p className="text-sm font-semibold">@{comment.name}</p>
      <p className="text-sm">{comment.comment}</p>
      {
        <div className="ml-6">
          {comment.replies?.map((reply) => (
            <Comment key={reply.id} comment={reply}></Comment>
          ))}
        </div>
      }
    </div>
  );
};

export default Comment;
