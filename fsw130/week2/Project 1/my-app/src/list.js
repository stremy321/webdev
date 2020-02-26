import React, { useContext } from "react";
import Ugly from "./Ugly";
import { VisibilityFilters } from "./../reducers/Ugly";
import { UglyContext } from "./../contexts/ugly";

const UglyList = () => {
  const { state } = useContext(UglyContext);
  const ugly = applyFilter(state);
  return (
    <div>
      <ul className="list">
        {uglies.map(ugly => (
          <Ugly key={ugly.id} {...ugly} />
        ))}
      </ul>
    </div>
    
  );
};

const applyFilter = state => {
  const { filter, ugly } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return ugly;
    case VisibilityFilters.SHOW_COMPLETED:
      return ugly.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return ugly.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default List;