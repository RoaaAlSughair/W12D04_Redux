const firstState = {
  token: "",
};

export const setToken = (token) => {
  return { type: "SET_TOKEN", payload: token };
};

// give a default value for state
// destructure the action
export default loginReducers = (state = firstState, { type, payload }) => {
  switch (type) {
    case "SET_TOKEN":
      return { token: payload };

    default:
      return firstState;
  }
};