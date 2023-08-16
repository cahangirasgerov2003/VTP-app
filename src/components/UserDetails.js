import { Link, useNavigate, useParams } from "react-router-dom";
import "./userDetails.css";

import React from "react";
import { connect } from "react-redux";
import { deleteDb } from "../actions/usersActions";

const UserDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedUser = props.users.find((user) => {
    return user.id === id;
  });

  return (
    <div className="row mt-3">
      <div className="col-4">
        <img className="w-100" src={selectedUser?.picture} alt="users"></img>
      </div>
      <div className="col-8 text-white d-flex justify-content-between">
        <div className="userDetails">
          <h5 className="card-title">Name : {selectedUser?.name}</h5>
          <h5 className="card-title">Surname : {selectedUser?.surName}</h5>
          <h5 className="card-title">Age : {selectedUser?.age}</h5>
          <h5 className="card-title">Email : {selectedUser?.email}</h5>
          <h5 className="card-title">
            University : {selectedUser?.university}
          </h5>
          <p className="description mt-3">
            Department : {selectedUser?.department}
          </p>
          <p>Interests :</p>
          <ul>
            {selectedUser?.interests.map((maraqlar, index) => {
              return <li key={index}>{maraqlar}</li>;
            })}
          </ul>
        </div>
        <div className="d-flex flex-column deleteEdit">
          <Link to="/members">
            Back <i className="fa-solid fa-backward"></i>
          </Link>
          <button type="button">Edit user info</button>
          <button
            type="button"
            onClick={() => {
              props.dispatch(deleteDb(id)).then(() => {
                navigate("/members");
              });
            }}
          >
            Delete user
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state,
  };
};

export default connect(mapStateToProps)(UserDetails);
