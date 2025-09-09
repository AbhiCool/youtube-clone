import React from "react";
import { Link } from "react-router-dom";
import { formatCount, timeAgo } from "../utils/helper";

const VideoElement = ({ video }) => {
  return (
    <Link to={"/watch?v=" + video.id} key={video.id}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt=""
        className="rounded-xl hover:rounded-none transition-all duration-200"
      />
      <div>
        <div className="flex">
          <h3 className="font-bold text-lg  text-gray-900">
            {video.snippet.title}
          </h3>
        </div>
        <p className="text-gray-700 font-semibold text-sm">
          {video.snippet.channelTitle}
        </p>
        <div className="flex text-gray-700 font-semibold text-sm">
          <p>{formatCount(video.statistics.viewCount)} views</p>
          <p className="px-1">&#183;</p>
          <p className=" ">{timeAgo(video.snippet.publishedAt)}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoElement;
