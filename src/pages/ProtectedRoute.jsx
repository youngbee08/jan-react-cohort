import React, { useContext, useEffect } from "react";
import { userContext } from "../contexts/UserContext";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth/login2");
    }
  }, [user, navigate]);

  return user ? <Outlet/> : null;
};

export default ProtectedRoute;
