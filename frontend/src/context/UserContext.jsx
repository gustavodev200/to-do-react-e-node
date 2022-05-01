import React, { createContext } from "react";

import useAuth from "../hooks/useAuth";


const Context = createContext();

const UserProvider = ({ children }) => {
  const {
    authenticated,
    loading,
    registerUser,
    login,
    msgError,
    msgSuccess,
    logout,
    token,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        authenticated,
        loading,
        registerUser,
        login,
        msgError,
        msgSuccess,
        logout,
        token,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, UserProvider };
