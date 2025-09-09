import React from "react";
import { useEffect } from "react";
import { videosUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { videoSliceActions } from "../redux/slice/videoSlice";
import VideoList from "../components/VideoList";

const Home = () => {
  const dispatch = useDispatch();

  const { sideMenuExpanded } = useSelector((state) => state.app);
  useEffect(() => {
    const fetchVideos = async () => {
      let res = await fetch(videosUrl);

      res = await res.json();
      console.log(res);

      dispatch(videoSliceActions.setVideos(res.items));
    };
    fetchVideos();
  }, []);

  return (
    <div
      className={`${
        sideMenuExpanded ? "col-span-11" : "col-span-12"
      } grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-2`}
    >
      <VideoList />
    </div>
  );
};

export default Home;
