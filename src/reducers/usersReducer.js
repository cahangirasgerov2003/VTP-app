const usersState = [];

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...usersState, action.user];
    case "PUSH_STORE":
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
