export const CHANGE_FILTER = "CHANGE_FILTER";
export const TOGGLE_MOVIE = "TOGGLE_TODO";
export const ADD_MOVIE = "ADD_TODO";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const removetvshows = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_tvshows: {
      const tvshows = state.tvshows.map(tvshows =>
        tvshows.id === payload.id ? { ...tvshows, ...payload } : movie
      );
      return { ...state, tvshows };
    }
    case ADD_tvshows: {
      const tvshows = [...state.tvshows, payload];
      return { ...state, tvshows };
    }
    default:
      return state;
  }
};

export default Removetvshows;