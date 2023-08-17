const eventsState = [];

const eventsReducer = (state = eventsState, action) => {
  switch (action.type) {
    case "ADD_EVENT":
      return [...state, action.event];
    case "PUSH_STORE_EVENT":
      return action.events;
    default:
      return state;
  }
};

export default eventsReducer;
