import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  // Your initial state here
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    // Your reducer logic here
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppContextProvider };
