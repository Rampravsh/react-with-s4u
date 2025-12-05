import { createContext, useContext, useState } from "react";

const myContext = createContext();

const useMycontext = () => {
  return useContext(myContext);
};

const MyContextProvider = ({ children }) => {
  const [first, setfirst] = useState(0);
  const value = {
    first,
    setfirst,
  };
  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

export { useMycontext, MyContextProvider };
