import React, { useState } from "react";

const DEFAULT_VALUE = {
  isAuthenticated: false,
  setIsAuthenticated: () => null,
};

const UserContext = React.createContext(DEFAULT_VALUE);

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    DEFAULT_VALUE.isAuthenticated
  );
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
