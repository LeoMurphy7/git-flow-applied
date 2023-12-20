import React from "react";
import "../my-sass.scss";
import style from "../styles/formCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", email: "", phone: "" };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    const value = event.target.value;
    this.setState({ name: value });
  }

  handleChangeEmail(event) {
    const value = event.target.value;
    this.setState({ email: value });
  }

  handleChangePhone(event) {
    const value = event.target.value;
    this.setState({ phone: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      "My name is " + this.state.name + this.state.email + this.state.phone
    );
  }

  render() {
    return (
      <section className="card" style={{ margin: "0 auto" }}>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Name
              </span>
              <input
                onChange={this.handleChangeName}
                value={this.state.name}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Email
              </span>
              <input
                onChange={this.handleChangeEmail}
                value={this.state.email}
                type="email"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Phone
              </span>
              <input
                onChange={this.handleChangePhone}
                value={this.state.phone}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Home;
