import React from "react";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { name, setName } = useContext(UserContext);
  return (
    <div>
      <p>My name is ____{name}_________</p>
      <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Home;
