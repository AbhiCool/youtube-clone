import React from "react";
import { useSelector } from "react-redux";
import Sidemenu from "../components/Sidemenu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const { sideMenuExpanded } = useSelector((state) => state.app);
  return (
    <div className="grid grid-cols-12">
      {sideMenuExpanded && <Sidemenu />}
      <Outlet />
    </div>
  );
};

export default Layout;
