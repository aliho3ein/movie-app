const MainReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: false };
    case "LOADING_ON":
      return { ...state, isLoading: true };
    default:
      return state;
  }
};

export default MainReducer;
