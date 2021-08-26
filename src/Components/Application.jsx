import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import About from "./about";
import Loading from "./loading";
import "./style.css";

class Application extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2600);
  }

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Application;
