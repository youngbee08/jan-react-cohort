import { createContext } from "react";

export const userContext = createContext();

const Userprovider = ({ children }) => {
  const user = {
    name: "Adesoye Toyeeb",
    occupation: "Co-founder",
    business_name: "Mysavemate",
    gender: "male",
    email: "adesoyetoyeeb01@gmail.com",
    phone: "09037140948",
  };
  const value = {
    user,
  };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};

export default Userprovider;
