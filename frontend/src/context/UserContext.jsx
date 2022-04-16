import React, { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

const UserProvider = ({ children }) => {
  const { authenticated, loading, registerUser, login, msgError, msgSuccess} = useAuth();

  return (
    <Context.Provider value={{ authenticated, loading, registerUser, login, msgError, msgSuccess}}>
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
