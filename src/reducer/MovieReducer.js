const MainReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      console.log("load");
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default MainReducer;
