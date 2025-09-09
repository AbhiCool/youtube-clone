import React from "react";
import VideoSearchElement from "./VideoSearchElement";
import { useSelector } from "react-redux";

const VideoSearchList = ({ searchedVideos }) => {
  const { sideMenuExpanded } = useSelector((state) => state.app);
  return (
    <div
      className={`${
        sideMenuExpanded ? "col-span-11" : "col-span-12"
      } p-4 w-full`}
    >
      {searchedVideos.map((video) => (
        <VideoSearchElement key={video.id.videoId} video={video} />
      ))}
    </div>
  );
};

export default VideoSearchList;
