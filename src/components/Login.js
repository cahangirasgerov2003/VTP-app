import { useNavigate } from "react-router-dom";
import "./login.css";
import React, { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkForm = () => {
    if (name.length >= 3 && email && password.length > 8) {
      alert("Congratulations, you have successfully logged in");
      navigate("/");
    } else {
      alert("You are required to fill in all fields !");
    }
    setPassword("");
    setName("");
    setEmail("");
  };

  return (
    <form className="row">
      <div className="col-12 mt-2 col-md-6">
        <label htmlFor="name" className="form-label">
          Name : {name}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
      </div>
      <div className="col-12 mt-2 col-md-6">
        <label htmlFor="email" className="form-label">
          Email : {email}
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
      </div>
      <div className="col-12 mt-2 col-md-6">
        <label htmlFor="password" className="form-label">
          Password : {password}
        </label>
        <input
          value={password}
          type="password"
          className="form-control"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
      </div>
      <div className="col-12 mt-2">
        <button
          type="button"
          onClick={checkForm}
          className="btn btn-success w-100 mt-4"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
