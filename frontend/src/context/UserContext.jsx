import React, { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { authenticated, loading, registerUser } = useAuth();

  return (
    <Context.Provider value={{ authenticated, loading, registerUser }}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
