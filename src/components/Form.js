import "./form.css";
import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.user ? props.user.name : "Cahangir",
      surName: props.user ? props.user.surName : "Asgerov",
      email: props.user ? props.user.email : "cahangirAsgerov22@gmail.com",
      age: props.user ? props.user.age : "21",
      university: props.user ? props.user.university : "ADNSU",
      department: props.user ? props.user.department : "Web proqramlaşdırma",
      interests: props.user ? props.user.interests : [],
      picture: props.user
        ? props.user.picture
        : "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      error: "",
    };
  }

  submitData = (e) => {
    e.preventDefault();
    if (
      this.state.name.trim() &&
      this.state.surName.trim() &&
      this.state.email.trim() &&
      this.state.university.trim() &&
      Number(this.state.age) > 18 &&
      this.state.interests.length > 0 &&
      this.state.picture.trim()
    ) {
      this.setState({
        error: "",
      });

      this.props.addForm({
        name: this.state.name,
        surName: this.state.surName,
        email: this.state.email,
        age: this.state.age,
        university: this.state.university,
        department: this.state.department || "İnşaat Mühəndisliyi",
        picture: this.state.picture,
        interests: this.state.interests,
      });
    } else {
      this.setState({
        error: "Please fill in all fields of the form !",
      });
    }

    this.setState({
      name: "",
      surName: "",
      email: "",
      age: "",
      university: "",
      department: "",
      picture: "",
      interests: [],
    });
  };

  handleInterests(value) {
    this.setState((previousState) => {
      return {
        interests: previousState.interests.concat(value),
      };
    });
  }

  render() {
    return (
      <div className="card-body">
        <form onSubmit={this.submitData}>
          <div className="mb-3">
            <label htmlFor="nameUser" className="form-label">
              Name :
            </label>
            <input
              className="form-control"
              type="text"
              name="nameUser"
              defaultValue={this.state.name}
              onChange={(e) => {
                this.setState({
                  name: e.target.value,
                });
              }}
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
              defaultValue={this.state.surName}
              onChange={(e) => {
                this.setState({
                  surName: e.target.value,
                });
              }}
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
              defaultValue={this.state.email}
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
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
              defaultValue={this.state.age}
              onChange={(e) => {
                this.setState({
                  age: e.target.value,
                });
              }}
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
              defaultValue={this.state.university}
              onChange={(e) => {
                this.setState({
                  university: e.target.value,
                });
              }}
              id="university"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="department" className="form-label">
              Department :
            </label>

            <select
              className="form-select"
              name="department"
              id="department"
              defaultValue={this.state.department}
              onChange={(e) => {
                this.setState({
                  department: e.target.value,
                });
              }}
            >
              <option className="text-dark" value="Web Proqramlaşdırma">
                Web Proqramlaşdırma
              </option>
              <option className="text-dark" value="İnsan Resursları">
                İnsan Resursları
              </option>
              <option className="text-dark" value="Rəqamsal Marketinq">
                Rəqamsal Marketinq
              </option>
              <option className="text-dark" value="İnşaat Mühəndisliyi">
                İnşaat Mühəndisliyi
              </option>
              <option className="text-dark" value="Mühasibatlıq">
                Mühasibatlıq
              </option>
              <option className="text-dark" value="Logistika">
                Logistika
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="interests" className="form-label">
              Interests :{" "}
              <ul className="mt-3">
                {this.state.interests.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Play football"
                id="interests"
                name="interests"
              />
              <button
                type="button"
                className="btn btn-primary text-white"
                onClick={() => {
                  this.handleInterests(
                    document.querySelector("#interests").value
                  );
                }}
              >
                +
              </button>
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
              defaultValue={this.state.picture}
              onChange={(e) => {
                this.setState({
                  picture: e.target.value,
                });
              }}
              id="picture"
            />
          </div>

          <small className="text-danger">{this.state.error}</small>

          <button type="submit" className="btn btn-primary w-100 text-white">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
