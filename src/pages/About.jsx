import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const About = () => {
  const { name } = useContext(UserContext);
  return <div className="text-red-700">About - {name}</div>;
};

export default About;
