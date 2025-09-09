import React from "react";
import { IoLogoYoutube } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { FaUserCircle } from "react-icons/fa";
import { appSliceActions } from "../redux/slice/AppSlice";
import { useDispatch } from "react-redux";
import YoutubeLogo from "./YoutubeLogo";

const Header = () => {
  const dispatch = useDispatch();
  const handleHamburgerOnlick = (e) => {
    dispatch(appSliceActions.toggleSideMenu());
  };
  return (
    <div className="flex justify-between items-center px-6 py-2 shadow-lg">
      <div className="flex items-center gap-1">
        <RxHamburgerMenu
          size="20"
          className="cursor-pointer"
          onClick={handleHamburgerOnlick}
        />
        <span>
          <Link className="flex items-center gap-1" to="/">
            <YoutubeLogo />
          </Link>
        </span>
      </div>
      <SearchInput />

      <FaUserCircle size="30" className="cursor-pointer" />
    </div>
  );
};

export default Header;
