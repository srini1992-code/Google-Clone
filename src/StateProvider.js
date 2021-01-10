import React, { createContext, useContext, useReducer } from 'react';

// prepare the datalayer (or) creating datalayer
export const StateContext = createContext();
// initialState-how the datalayer looks like when the app is loaded
// reducer-listens to changes and dispatches an action as what something happened to state,but not how it happend
// hoc
export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* app */}
    {children}
  </StateContext.Provider>
);

// hook allows us to pull information from data layer
export const useStateValue = () => useContext(StateContext);

// the changes that happened will be in reducer
