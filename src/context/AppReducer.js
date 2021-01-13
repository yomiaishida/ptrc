export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECK":
      return {
        ...state,
        secondStateVal: !state.secondStateVal,
      };
    default:
      return state;
  }
};
