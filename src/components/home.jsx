import React from "react";
import "../my-sass.scss";

class Home extends React.Component {
  state = { name: "", email: "", phone: "" };

  handleChange = (field) => (event) => {
    const value = event.target.value;
    this.setState({ [field]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;
    alert(`My name is ${name}${email}${phone}`);
  }

  renderInput = (label, field, type) => (
    <div className="input-group mb-3">
      <span className="input-group-text" id="inputGroup-sizing-default">
        {label}
      </span>
      <input
        onChange={this.handleChange(field)}
        value={this.state[field]}
        type={type}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );

  render() {
    return (
      <section className="card">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("Name", "name", "text")}
            {this.renderInput("Email", "email", "email")}
            {this.renderInput("Phone", "phone", "text")}

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
