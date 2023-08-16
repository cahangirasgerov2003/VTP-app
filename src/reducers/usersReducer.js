const usersState = [];

const usersReducer = (state = usersState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "DELETE_USER":
      return state.filter((user) => {
        return user.id !== action.id;
      });
    case "PUSH_STORE":
      return action.users;
    default:
      return state;
  }
};

export default usersReducer;
