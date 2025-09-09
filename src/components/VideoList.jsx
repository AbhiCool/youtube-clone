import React from "react";
import { useSelector } from "react-redux";
import VideoElement from "./VideoElement";

const VideoList = () => {
  const { videos } = useSelector((state) => state.video);

  return (
    <>
      {videos.map((video) => {
        return <VideoElement key={video.id} video={video} />;
      })}
    </>
  );
};

export default VideoList;
