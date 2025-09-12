import React from "react";
import { useSelector } from "react-redux";
import VideoElement from "./VideoElement";

const VideoList = () => {
  const { videos } = useSelector((state) => state.video);

  return (
    <>
      {videos.map((video) => {
        const videoId =
          typeof video.id === "object" ? video.id.videoId : video.id;

        return <VideoElement key={videoId} video={video} />;
      })}
    </>
  );
};

export default VideoList;
