import React from "react";
import "./create.css";

const Create = () => {
  return (
    <div className="mt-2">
      <h1 className="textAdded">
        You can later delete or modify the user you entered &#129323;
      </h1>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="nameUser" className="form-label">
              Name :
            </label>
            <input
              className="form-control"
              type="text"
              name="nameUser"
              defaultValue="Cahangir"
              id="nameUser"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="surName" className="form-label">
              Surname :
            </label>
            <input
              className="form-control"
              type="text"
              name="surName"
              defaultValue="Asgerov"
              id="surName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label">
              Email :
            </label>
            <input
              className="form-control"
              type="email"
              name="userEmail"
              defaultValue="asgerovCahangir@gmail.com"
              id="userEmail"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userAge" className="form-label">
              Age :
            </label>
            <input
              className="form-control"
              type="number"
              name="userAge"
              defaultValue="21"
              id="userAge"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="university" className="form-label">
              University :
            </label>
            <input
              className="form-control"
              type="text"
              name="university"
              defaultValue="ADNSU"
              id="university"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department :
            </label>
            <input
              className="form-control"
              type="text"
              name="department"
              defaultValue="Information technologies"
              id="department"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="interests" className="form-label">
              Interests :
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Play football"
                id="interests"
                name="interests"
              />
              <button className="btn btn-primary text-white">+</button>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="picture" className="form-label">
              Picture :
            </label>
            <input
              className="form-control"
              type="text"
              name="picture"
              defaultValue="https://"
              id="picture"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 text-white">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
