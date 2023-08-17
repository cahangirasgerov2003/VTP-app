import { Link, useSearchParams } from "react-router-dom";
import "./searchResult.css";
import React from "react";
import { connect } from "react-redux";

const SearchResult = (props) => {
  const [keywords] = useSearchParams();
  const keywordName = keywords.get("q");
  const searchResult = props.users.filter((user) => {
    return user.name === keywordName[0].toUpperCase() + keywordName.slice(1);
  });
  return (
    <div className="row mt-3">
      <h3 className="text-warning text-center mb-4">Keyword : {keywordName}</h3>
      {searchResult.map((searchResult, index) => {
        return (
          <div
            className="card col-lg-4 col-md-6 mb-4 border-0 backgroundColor"
            key={index}
          >
            <img
              src={searchResult.picture}
              alt="Users"
              style={{
                height: "256px",
                width: "256px",
                objectFit: "cover",
                margin: "auto",
              }}
            ></img>
            <div className="card-body cardBG mt-2 rounded text-center">
              <h5 className="card-title">Name : {searchResult.name}</h5>
              <h5 className="card-title">Surname : {searchResult.surName}</h5>
              <p>{searchResult.department}</p>
              <Link
                to={`/members/${searchResult.id}`}
                className="btn btn-success text-white w-100"
              >
                User Details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(SearchResult);
