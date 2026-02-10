import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [theme, setTheme] = useState("white");

  const value = { name, setName, theme, setTheme };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
