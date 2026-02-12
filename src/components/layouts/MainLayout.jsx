import React from "react";
import Header from "../navs/Header";

const MainLayout = ({ children }) => {
  return (
    <div className={``}>
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default MainLayout;
