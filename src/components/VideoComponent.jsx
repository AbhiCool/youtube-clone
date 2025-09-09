import React from "react";
import { formatCount, timeAgo } from "../utils/helper";
import { GrDislike, GrLike } from "react-icons/gr";
import { PiShareFatLight } from "react-icons/pi";

const VideoComponent = ({
  videoUrl,
  title,
  description,
  views,
  likes,
  dislikes,
  comments,
  publishedAt,
  channelName,
  subscribers,
  channelThumbnail,
}) => {
  return (
    <div className="md:w-3/4 w-full">
      <iframe
        src={videoUrl}
        className="w-full h-[600px]"
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className="p-4 w-full">
        <h1 className="font-bold text-2xl p-2">{title}</h1>
        <div>
          <div className="flex justify-between items-start gap-2 py-3 flex-col md:flex-row">
            <div className="flex items-start gap-4 py-2">
              <div className="flex items-center gap-2">
                <img
                  src={channelThumbnail}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold">{channelName}</p>
                  <p className="text-sm">
                    {formatCount(subscribers)} subscribers
                  </p>
                </div>
              </div>

              <button className="bg-gray-200 hover:bg-gray-400 px-4 py-1 rounded-full cursor-pointer">
                Subscribe
              </button>
            </div>

            <div className="flex gap-2">
              <div className="flex bg-gray-200 rounded-full">
                <button className="border border-gray-200 hover:bg-gray-400 px-4 py-1 flex items-center gap-2 rounded-l-full cursor-pointer bg-gray-200">
                  <GrLike />
                  {formatCount(likes)}
                </button>
                <div
                  className="w-[1px] border-l border-[1px]
                border-gray-300 h-[80%] self-center"
                ></div>

                <button className="border border-gray-200 hover:bg-gray-400 px-4 py-1 flex  items-center gap-2 rounded-r-full cursor-pointer bg-gray-200">
                  <GrDislike />
                </button>
              </div>

              <button className="flex  items-center gap-2 rounded-full bg-gray-200 hover:bg-gray-400 px-4 py-1 cursor-pointer">
                <PiShareFatLight />
                Share
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 bg-gray-200 rounded-xl">
          <p className="font-semibold">
            {views + " views " + timeAgo(publishedAt)}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
