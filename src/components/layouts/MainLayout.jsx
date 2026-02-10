import React, { useContext } from "react";
import Header from "../navs/Header";
import { UserContext } from "../../contexts/UserContext";

const MainLayout = ({ children }) => {
  const { theme } = useContext(UserContext);
  const themeOption =
    theme === "white" ? true : theme === "dark" ? false : true;
  return (
    <div
      className={`${themeOption === true ? "bg-white" : "bg-black"} h-screen`}
    >
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default MainLayout;
