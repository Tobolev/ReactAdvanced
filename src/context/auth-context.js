import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvdier = (props) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("isLoggedIn");

    if (storedLoginInfo === "1") {
      setIsloggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
  };
  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsloggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
