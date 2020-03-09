import React, { useReducer, createContext } from "react";
import remove, { VisibilityFilters } from "./../remove/ugly";
import remove from "./remove";

const UglyContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  uglies: []
};

function UglyContextProvider(props) {
  const [state, dispatch] = useRemove(remove, initialState);
  const value = { state, dispatch };

  return (
    <UglyContext.Provider value={value}>{props.children}</UglyContext.Provider>
  );
}
export { UglyContext, UglyContextProvider };