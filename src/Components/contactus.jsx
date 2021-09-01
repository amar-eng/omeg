import React, { Component } from "react";

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    result: "",
    respond: "",
  };

  handleChange = ({ currentTarget: input }) => {
    this.setState({ [input.name]: input.value });
  };

  render() {
    return (
      <div className="row contact-row">
        <div className="col-md-3"></div>

        <div className="m-4 contact col-md-6">
          <h1>Contact Us</h1>

          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                value={this.state.name}
                className="form-control"
                onChange={this.handleChange}
                placeholder="Enter Name"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                value={this.state.email}
                className="form-control"
                onChange={this.handleChange}
                placeholder="Enter Email"
              ></input>
            </div>

            <div className="form-group">
              <label htmlFor="name">Message</label>

              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Enter Message"
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>

            <button className="contact-btn">Submit</button>

            {this.state.respond === "true" && (
              <div className="load-icon">
                <i class="fa fa-undo loader"></i>
              </div>
            )}

            {this.state.respond === "sent" && (
              <div className="respond-message msg-ok">
                <h6>
                  {this.state.result} <i class="fa fa-check"></i>
                </h6>
              </div>
            )}

            {this.state.respond === "fail" && (
              <div className="respond-message msg-fail">
                <h6>
                  {this.state.result} <i class="fa fa-times"></i>
                </h6>
              </div>
            )}
          </form>
        </div>

        <div className="col-md-3"></div>
      </div>
    );
  }
}

export default ContactUs;
