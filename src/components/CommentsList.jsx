import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    id: 1,
    name: "Alice Johnson",
    comment: "This is the first top-level comment.",
    replies: [
      {
        id: 2,
        name: "Bob Smith",
        comment: "I totally agree with this!",
        replies: [
          {
            id: 3,
            name: "Charlie Brown",
            comment: "Same here, Bob. Makes sense.",
          },
          {
            id: 4,
            name: "Diana Prince",
            comment: "I see your point, but I have a different take.",
            replies: [
              {
                id: 5,
                name: "Ethan Hunt",
                comment: "Interesting perspective, Diana!",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "Fiona Clark",
        comment: "Can we explain this in simpler terms?",
      },
    ],
  },
  {
    id: 7,
    name: "George Taylor",
    comment: "Here’s another top-level comment.",
    replies: [
      {
        id: 8,
        name: "Hannah Lee",
        comment: "Thanks, George! I was thinking the same.",
      },
    ],
  },
  {
    id: 9,
    name: "Ian Carter",
    comment: "This is yet another top-level comment with no replies.",
  },
];

const CommentsList = () => {
  return (
    <div className="py-2 px-4">
      <h1 className="text-xl font-bold">Comments</h1>
      <div className="rounded-xl bg-gray-100 p-4">
        {commentData.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
