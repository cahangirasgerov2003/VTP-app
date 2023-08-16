const usersState = [];

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];
    case "DELETE_USER":
      return state.filter((user) => {
        return user.id !== action.id;
      });
    case "PUSH_STORE":
      return action.users;
    case "UPDATE_USER":
      return state.map((user) => {
        return user.id !== action.id ? user : { ...user, ...action.updateData };
      });
    default:
      return state;
  }
};

export default usersReducer;
