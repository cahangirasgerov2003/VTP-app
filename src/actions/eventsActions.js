import database from "../firebase/configFirebase";

// ACTIONS CREATER
export const addEvent = (event) => {
  return {
    type: "ADD_EVENT",
    event,
  };
};

export const addEventToDb = (newEvent = {}) => {
  return (dispatch) => {
    const { eventName, eventDeadLine, eventDesc } = newEvent;
    database
      .ref("events")
      .push({
        eventName,
        eventDeadLine,
        eventDesc,
      })
      .then((response) => {
        dispatch(
          addEvent({
            id: response.key,
            ...newEvent,
          })
        );
      });
  };
};

// ACTIONS CREATER
export const pushStoreEvent = (events) => {
  return {
    type: "PUSH_STORE_EVENT",
    events,
  };
};

export const pullDbEvent = () => {
  return async (dispatch) => {
    const snapshot = await database.ref("events").once("value");
    const allEvents = [];
    snapshot.forEach((events) => {
      allEvents.push({
        id: events.key,
        ...events.val(),
      });
    });
    dispatch(pushStoreEvent(allEvents));
  };
};
