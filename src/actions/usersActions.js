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
      .ref("users/" + department)
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
    console.log(snapshot);
    console.log(snapshot.val());
    const users = [];
    snapshot.forEach((blog) => {
      users.push({
        id: blog.key,
        ...blog.val(),
      });
    });
    dispatch(pushStore(users));
  };
};
