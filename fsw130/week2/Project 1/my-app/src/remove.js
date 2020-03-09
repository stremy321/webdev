export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_UGLY = "TOGGLE_UGLY";
export const ADD = "ADD_UGLY";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const remove = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_UGLY: {
      const uglies = state.ugly.map(ugly =>
        ugly.id === payload.id ? { ...ugly, ...payload } : ugly
      );
      return { ...state, ugly };
    }
    case ADD_UGLY: {
      const uglies = [...state.ugly, payload];
      return { ...state, ugly };
    }
    default:
      return state;
  }
};

export default remove;