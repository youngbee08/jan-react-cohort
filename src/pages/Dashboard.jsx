import React, { useContext } from "react";
import { userContext } from "../contexts/UserContext";

const Dashboard = () => {
  const { user } = useContext(userContext);
  return <div>Welcome to Dashboard!!! {user?.firstName}</div>;
};

export default Dashboard;
