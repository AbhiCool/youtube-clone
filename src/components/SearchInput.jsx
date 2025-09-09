import React from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { appSliceActions } from "../redux/slice/AppSlice";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const {
    searchTerm,
    searchSuggestions,
    showSearchSuggestions,
    searchSuggestionsCache,
  } = useSelector((state) => state.app);

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(appSliceActions.setSearchTerm(e.target.value));
  };

  async function getGoogleSuggestions(query) {
    if (query == "") {
      dispatch(appSliceActions.setSearchSuggestions([]));
      return;
    }
    if (searchSuggestionsCache[query]) {
      dispatch(
        appSliceActions.setSearchSuggestions(searchSuggestionsCache[query])
      );
      return;
    }

    const url =
      "https://api.allorigins.win/raw?url=" +
      encodeURIComponent(
        "https://suggestqueries.google.com/complete/search?client=firefox&q=" +
          query
      );
    const res = await fetch(url);
    const data = await res.json();

    dispatch(appSliceActions.setSearchSuggestions(data[1])); // data[1]; // array of suggestion strings

    console.log({
      key: query,
      value: data[1],
    });
    dispatch(
      appSliceActions.setSearchSuggestionsCache({
        key: query,
        value: data[1],
      })
    );
  }

  useDebounce(() => getGoogleSuggestions(searchTerm), 300);

  const handleSuggestionClick = (suggestion) => {
    console.log("suggestion", suggestion);
    dispatch(appSliceActions.setSearchTerm(suggestion));

    dispatch(appSliceActions.setShowSearchSuggestions(false));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm) return;

    navigate("/results?search_query=" + searchTerm);
  };
  return (
    <form className="flex w-1/2" onSubmit={handleOnSubmit}>
      <div className="relative h-10 w-[90%]">
        <input
          type="text"
          placeholder="Search"
          className=" w-full h-full border border-gray-200 rounded-tl-full rounded-bl-full p-4 outline-none shadow-lg"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() =>
            dispatch(appSliceActions.setShowSearchSuggestions(true))
          }
          onBlur={() =>
            dispatch(appSliceActions.setShowSearchSuggestions(false))
          }
        />
        {searchSuggestions.length > 0 && showSearchSuggestions && (
          <ul className="absolute top-10 left-0  w-full  z-10 h-[200px] overflow-y-scroll p-2 bg-gray-200 rounded-lg">
            {searchSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onMouseDown={() => handleSuggestionClick(suggestion)}
                className="p-2 bg-gray-200 flex items-center gap-2 cursor-pointer hover:bg-gray-300 rounded-lg"
              >
                <CiSearch />
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="bg-gray-100 p-2 rounded-tr-full rounded-br-full border  border-gray-200 h-10 w-[10%] min-w-[40px] flex items-center justify-center cursor-pointer">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
