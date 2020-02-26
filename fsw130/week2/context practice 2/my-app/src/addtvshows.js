import React, { useContext, useState } from "react";
import { removetvshows } from "./Removetvshows";
import { tvshowsContext } from "./listContext";
import Button from "./Button";

const Addtvshows = () => {
  const { dispatch } = useContext(tvshowsContext);
  const [nexttvshowsId, setIndex] = useState(1);
  const input = useFromInput("");
  const { resetValue, ...inputProp } = input;
  return (
    <div classname="addtvshows">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch({
            type: ADD_tvshows,
            payload: {
              id: nexttvshowsId,
              completed: false,
              text: input.value
            }
          });
          setIndex(nexttvshowsId + 1);
          resetValue();
        }}
      >
        <input placeholder="Pick a tv show"{...inputProp} /><hr />
        <Button type="submit">Add tvshows</Button>
      </form>
    </div>
  );
};

function useFromInput(initValue = "") {
  const [value, setValue] = useState(initValue);
  const onChange = e => setValue(e.target.value);
  const resetValue = newValue => setValue(newValue || initValue);
  return { value, onChange, resetValue };
}

export default Addtvshows;