import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { videoSliceActions } from "../redux/slice/videoSlice";
import { searchApi } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import VideoSearchList from "../components/VideoSearchList";

const Results = () => {
  const dispatch = useDispatch();

  const { searchedVideos } = useSelector((state) => state.video);
  const [searchParams] = useSearchParams();
  const search_query = searchParams.get("search_query");

  useEffect(() => {
    const getSeachResults = async (search_query) => {
      console.log("search_query", search_query);
      let res = await fetch(searchApi + search_query);

      res = await res.json();

      dispatch(videoSliceActions.setSearchVideos(res.items));
    };

    getSeachResults(search_query);
  }, [search_query]);
  return <VideoSearchList searchedVideos={searchedVideos} />;
};

export default Results;
