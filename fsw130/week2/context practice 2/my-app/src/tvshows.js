import React, { useContext } from "react";
import PropTypes from "prop-types";
import { TOGGLE_tvshows } from "./Removetvshows";
import { tvshowContext } from "./listContext";

const Tvshows = ({ id, completed, text }) => {
  const { dispatch } = useContext(TvshowsContext);
  return (
    <li
      onClick={() =>
        dispatch({
          type: TOGGLE_Tvshows,
          payload: { id, completed: !completed }
        })
      }
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </li>
  );
};

Tvshows.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Tvshows;