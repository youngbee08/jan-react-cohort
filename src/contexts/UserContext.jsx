import { createContext, useState } from "react";

export const userContext = createContext();

const Userprovider = ({ children }) => {
  const existingUser = JSON.parse(localStorage.getItem("userDetails"));

  const [user, setUser] = useState(existingUser || null);

  function logUserIn(details) {
    if (!details) {
      return;
    }
    localStorage.setItem("userDetails", JSON.stringify(details));
    setUser(details);
  }
  const value = {
    user,
    logUserIn,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default Userprovider;
