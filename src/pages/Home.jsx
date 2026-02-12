import React from "react";
import { useContext } from "react";
import { userContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>Hello {user.name}</h1>
    </div>
  );
};

export default Home;
