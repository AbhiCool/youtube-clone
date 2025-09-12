import React, { useCallback } from "react";
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

  // ✅ wrap in useCallback so it doesn't recreate on every render
  const getGoogleSuggestions = useCallback(
    async (query) => {
      if (query === "") {
        dispatch(appSliceActions.setSearchSuggestions([]));
        return;
      }

      if (searchSuggestionsCache[query]) {
        const cached = searchSuggestionsCache[query];
        if (JSON.stringify(cached) !== JSON.stringify(searchSuggestions)) {
          dispatch(appSliceActions.setSearchSuggestions(cached));
        }
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
      const suggestions = data[1];

      if (JSON.stringify(suggestions) !== JSON.stringify(searchSuggestions)) {
        dispatch(appSliceActions.setSearchSuggestions(suggestions));
      }

      dispatch(
        appSliceActions.setSearchSuggestionsCache({
          key: query,
          value: suggestions,
        })
      );
    },
    [dispatch, searchSuggestions, searchSuggestionsCache] // deps
  );

  useDebounce(searchTerm, 300, getGoogleSuggestions);

  const handleSuggestionClick = (suggestion) => {
    dispatch(appSliceActions.setSearchTerm(suggestion));
    dispatch(appSliceActions.setShowSearchSuggestions(false));

    goToSearch(searchTerm);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    goToSearch(searchTerm);
  };

  const goToSearch = (searchTerm) => {
    if (!searchTerm) return;
    navigate("/results?search_query=" + searchTerm);
  };

  return (
    <form className="flex w-1/2" onSubmit={handleOnSubmit}>
      <div className="relative h-10 w-[90%]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full border border-gray-200 rounded-tl-full rounded-bl-full p-4 outline-none shadow-lg"
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
          <ul className="absolute top-10 left-0 w-full z-10 h-[200px] overflow-y-scroll p-2 bg-gray-200 rounded-lg">
            {searchSuggestions.map((suggestion) => (
              <li
                key={suggestion}
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
      <button className="bg-gray-100 p-2 rounded-tr-full rounded-br-full border border-gray-200 h-10 w-[10%] min-w-[40px] flex items-center justify-center cursor-pointer">
        <CiSearch />
      </button>
    </form>
  );
};

export default SearchInput;
