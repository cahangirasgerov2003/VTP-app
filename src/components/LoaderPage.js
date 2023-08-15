import "./loaderPage.css";
import React from "react";

const LoaderPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <p className="my-4">Loading user data, please wait ...</p>
      <p>
        <i className="fa-solid fa-rss fa-fade fa-2xl"></i>
      </p>
    </div>
  );
};

export default LoaderPage;
