import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  channelDetailsApi,
  videoDetailsApi,
  videoPlayerUrl,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { videoSliceActions } from "../redux/slice/videoSlice";
import LiveChat from "../components/LiveChat";
import { appSliceActions } from "../redux/slice/AppSlice";
import VideoComponent from "../components/VideoComponent";
import CommentsList from "../components/CommentsList";

const Watch = () => {
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");
  console.log("videoId", videoId);

  const { selectedVideo, channelDetails } = useSelector((state) => state.video);

  const { sideMenuExpanded } = useSelector((state) => state.app);

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchVideoAndDetails = async (videoId) => {
      let res = await fetch(videoDetailsApi + videoId);

      res = await res.json();

      console.log(res);

      dispatch(videoSliceActions.setSelectedVideo(res.items[0]));

      const channelId = res.items[0].snippet.channelId;
      console.log("channelId", channelId);

      res = await fetch(channelDetailsApi + channelId);

      res = await res.json();
      console.log(res);

      dispatch(videoSliceActions.setChannelDetails(res.items[0]));
    };

    dispatch(appSliceActions.closeSideMenu());

    fetchVideoAndDetails(videoId);
  }, []);

  if (!selectedVideo && !channelDetails) return;

  return (
    <div className={`${sideMenuExpanded ? "col-span-11" : "col-span-12"}`}>
      <div className="flex w-full h-[600px] flex-col md:flex-row p-2">
        <VideoComponent
          videoUrl={videoPlayerUrl + videoId + "?autoplay=1"}
          title={selectedVideo.snippet.title}
          description={selectedVideo.snippet.description}
          views={selectedVideo.statistics.viewCount}
          likes={selectedVideo.statistics.likeCount}
          dislikes={selectedVideo.statistics.dislikeCount}
          comments={selectedVideo.statistics.commentCount}
          publishedAt={selectedVideo.snippet.publishedAt}
          channelName={channelDetails?.snippet.title}
          subscribers={channelDetails?.statistics?.subscriberCount}
          channelThumbnail={channelDetails?.snippet?.thumbnails.medium.url}
        />
        <LiveChat />
      </div>
    </div>
  );
};

export default Watch;
