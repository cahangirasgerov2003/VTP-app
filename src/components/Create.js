import React from "react";
import "./create.css";
import Form from "./Form";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserToDb } from "../actions/usersActions";

const Create = (props) => {
  const navigate = useNavigate();
  return (
    <div className="mt-2">
      <h1 className="textAdded">
        You can later delete or modify the user you entered &#129323;
      </h1>
      <Form
        addForm={(newUser) => {
          props.dispatch(addUserToDb(newUser));
          navigate("/members");
        }}
      />
    </div>
  );
};

export default connect()(Create);
