import React, { Component } from "react";
import $ from "jquery";
import Hero from "./hero";
import Articles from "./articles";
import Office from "./office";
import ContactUs from "./contactus";

class Home extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "OMEGA";

    $("#button").click(function () {
      $(".transform").toggleClass("transform-active");
    });
  }

  render() {
    return (
      <div className="home">
        <Hero />
        <Articles />
        <Office />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
