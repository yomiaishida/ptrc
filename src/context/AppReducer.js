// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "TOGGLE_CHECK":
      return {
        ...state,
        toggleValue: !state.toggleValue,
      };
    default:
      return state;
  }
};
