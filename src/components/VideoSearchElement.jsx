import React from "react";
import { timeAgo } from "../utils/helper";
import { Link } from "react-router-dom";

const VideoSearchElement = ({ video }) => {
  console.log(video);
  const thumbnail = video.snippet.thumbnails.medium.url;
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const publishTime = video.snippet.publishTime;
  const videoId = video.id.videoId;
  const description = video.snippet.description;
  return (
    <Link to={"/watch?v=" + videoId}>
      <div className="flex w-full md:px-15 px-5 py-1">
        <div className="w-1/2 md:w-1/3">
          <img
            className="w-full  h-auto rounded-xl  object-cover"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="w-1/2 md:w-2/3 p-5 gap-2 flex flex-col">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="text-xs">
            {channelTitle}
            <span className="mx-1">&#183;</span>
            {timeAgo(publishTime)}
          </p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoSearchElement;
