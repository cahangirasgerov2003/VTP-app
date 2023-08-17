import "./home.css";
import React from "react";

import ProgressBar from "@ramonak/react-progress-bar";

import { connect } from "react-redux";

const Home = (props) => {
  const Ir = props.users.filter((user) => {
    return user.department === "İnsan Resursları";
  });
  const Rm = props.users.filter((user) => {
    return user.department === "Rəqamsal Marketinq";
  });
  const Im = props.users.filter((user) => {
    return user.department === "İnşaat Mühəndisliyi";
  });
  const Mu = props.users.filter((user) => {
    return user.department === "Mühasibatlıq";
  });
  const Lo = props.users.filter((user) => {
    return user.department === "Logistika";
  });

  const web = props.users.filter((user) => {
    return user.department === "Web proqramlaşdırma";
  });

  const allUsers = props.users.length;

  const allTable = [web, Rm, Ir, Lo, Im, Mu];

  return (
    <div>
      <h1>İştirakçıların şöbələr üzrə paylanma faizi &#128512;</h1>
      <div className="progressBar">
        <p className="progressTitle">Web proqramlaşdırma : </p>
        <ProgressBar
          maxCompleted={100}
          completed={((web.length / allUsers) * 100).toFixed(2)}
          height="30px"
          bgColor="#88157e"
          baseBgColor="#ffacac"
          labelAlignment="center"
          width="50%"
        ></ProgressBar>
      </div>

      <div className="progressBar">
        <p className="progressTitle">İnsan Resursları : </p>
        <ProgressBar
          maxCompleted={100}
          completed={((Ir.length / allUsers) * 100).toFixed(2)}
          height="30px"
          bgColor="#88157e"
          baseBgColor="#ffacac"
          labelAlignment="center"
          width="50%"
        ></ProgressBar>
      </div>

      <div className="progressBar">
        <p className="progressTitle">Rəqamsal Marketinq : </p>
        <ProgressBar
          maxCompleted={100}
          completed={((Rm.length / allUsers) * 100).toFixed(2)}
          height="30px"
          bgColor="#88157e"
          baseBgColor="#ffacac"
          labelAlignment="center"
          width="50%"
        ></ProgressBar>
      </div>

      <div className="progressBar">
        <p className="progressTitle">İnşaat Mühəndisliyi : </p>
        <ProgressBar
          maxCompleted={100}
          completed={((Im.length / allUsers) * 100).toFixed(2)}
          height="30px"
          bgColor="#88157e"
          baseBgColor="#ffacac"
          labelAlignment="center"
          width="50%"
        ></ProgressBar>
      </div>

      <div className="progressBar">
        <p className="progressTitle">Mühasibatlıq : </p>
        <ProgressBar
          maxCompleted={100}
          completed={((Mu.length / allUsers) * 100).toFixed(2)}
          height="30px"
          bgColor="#88157e"
          baseBgColor="#ffacac"
          labelAlignment="center"
          width="50%"
        ></ProgressBar>
      </div>

      <div className="progressBar">
        <p className="progressTitle">Logistika : </p>
        <ProgressBar
          maxCompleted={100}
          completed={((Lo.length / allUsers) * 100).toFixed(2)}
          height="30px"
          bgColor="#88157e"
          baseBgColor="#ffacac"
          labelAlignment="center"
          width="50%"
        ></ProgressBar>
      </div>

      <h1 className="tableTitle">Şöbələr üzrə iştirakçı cədvəlləri :</h1>
      {allTable.map((user, index) => {
        if (user.length > 0) {
          return (
            <div className="tableContainer" key={index}>
              <h2 className="departmentsTitle">{`${user[0]?.department} : `}</h2>
              <table className="table table-dark table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Department</th>
                    <th scope="col">University</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((user, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.surName}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.department}</td>
                        <td>{user.university}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(Home);
