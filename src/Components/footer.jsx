import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer">
        <Link className="nav-link" to="/">
          <div className="link-t">
            <p>Home</p>
            <div></div>
          </div>
        </Link>

        <Link className="nav-link" to="/about">
          <div className="link-t">
            <p>About Us</p>
            <div></div>
          </div>
        </Link>
      </div>
      <div className="copyright">
        <p>
          Copyright © 2021 Omega - Developed by{" "}
          <a
            href="https://amar-mo.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Amar Mohamud
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
