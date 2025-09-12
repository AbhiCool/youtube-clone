import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { videosUrl } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { videoSliceActions } from "../redux/slice/videoSlice";
import VideoList from "../components/VideoList";
import { FaSpinner } from "react-icons/fa";

const Home = () => {
  const dispatch = useDispatch();

  const { sideMenuExpanded } = useSelector((state) => state.app);

  const nextTokenRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [pageToken, setPageToken] = useState(null);
  useEffect(() => {
    const fetchVideos = async () => {
      let finalVideosUrl = videosUrl;
      if (pageToken) {
        finalVideosUrl += `&pageToken=${pageToken}`;
      }
      setLoading(true);
      let res = await fetch(finalVideosUrl);

      res = await res.json();

      nextTokenRef.current = res.nextPageToken;
      console.log(res);

      setLoading(false);
      dispatch(videoSliceActions.setVideos(res.items));
    };
    fetchVideos();

    const handleScroll = () => {
      // console.log("scrolled");
      // console.log(window.innerHeight + window.scrollY);
      // console.log(document.documentElement.scrollHeight);
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500
      ) {
        if (nextTokenRef.current) {
          console.log("nextTokenRef.current", nextTokenRef.current);
          setPageToken(nextTokenRef.current);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageToken]);

  return (
    <div className={`${sideMenuExpanded ? "col-span-10" : "col-span-12"} `}>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6 py-2">
        <VideoList />
      </div>
      {loading && (
        <div className="w-full p-2 flex justify-center">
          <FaSpinner size="40" className="animate-spin" />
        </div>
      )}
    </div>
  );
};

export default Home;
