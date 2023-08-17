import { connect } from "react-redux";
import Form from "./Form";
import "./edit.css";

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateDb } from "../actions/usersActions";

const Edit = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    setPathName(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="mt-2">
      <h1 className="textAdded">
        Do you want to edit user information? &#128565;
      </h1>
      <Form
        user={props.users.find((user) => {
          return user.id === params.id;
        })}
        addForm={(newUserData) => {
          props.dispatch(updateDb(params.id, newUserData));
          navigate(`/${pathName}`);
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Edit);
