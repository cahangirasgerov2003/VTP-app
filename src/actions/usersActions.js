import database from "../firebase/configFirebase";

// ACTIONS CREATER
export const addUser = (user) => {
  return {
    type: "ADD_USER",
    user,
  };
};

export const addUserToDb = (newUser = {}) => {
  return (dispatch) => {
    const {
      name,
      surName,
      age,
      university,
      department,
      interests,
      email,
      picture,
    } = newUser;
    database
      .ref("users")
      .push({
        name,
        surName,
        age,
        university,
        department,
        interests,
        email,
        picture,
      })
      .then((response) => {
        dispatch(
          addUser({
            id: response.key,
            ...newUser,
          })
        );
      });
  };
};

// ACTIONS CREATER
export const pushStore = (users) => {
  return {
    type: "PUSH_STORE",
    users,
  };
};

export const pullDb = () => {
  return async (dispatch) => {
    const snapshot = await database.ref("users").once("value");
    const allUsers = [];
    snapshot.forEach((users) => {
      allUsers.push({
        id: users.key,
        ...users.val(),
      });
    });
    dispatch(pushStore(allUsers));
  };
};

// ACTIONS CREATER

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const deleteDb = (id) => {
  return async (dispatch) => {
    try {
      await database.ref(`users/${id}`).remove();
      dispatch(deleteUser(id));
    } catch (e) {
      console.log("Error : ", e);
    }
  };
};
