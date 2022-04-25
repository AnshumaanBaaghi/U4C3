import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [clickedBook, setClickedBook] = useState(0);
  const handleLogin = (email, password) => {
    //  api request to reqres.in for the token
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
  };
  const [Auth, setAuth] = useState(false);
  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={{ Auth, setAuth, handleLogin, token, handleLogout, setClickedBook, clickedBook }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
