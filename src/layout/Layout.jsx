import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="flex">
      <div className="w-1/5 border-r-2">
        <Sidebar />
      </div>
      <div className="w-4/5 p-12 px-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
