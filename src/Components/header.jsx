import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="new-header">
        <Link to="/">
          <img src="/img/logo5.png" alt="Logo" className="logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
