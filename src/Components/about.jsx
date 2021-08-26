import React, { Component } from "react";
import $ from "jquery";

class About extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "About - OMEGA";

    setTimeout(() => this.setState({ loading: false }), 3000);

    $("#button2").click(function () {
      $(".transform").toggleClass("transform-active");
    });
  }

  render() {
    if (this.state.loading)
      return (
        <div className="about-page">
          <div className="about row">
            <div className="white-box"></div>
            <div className="inner-about">
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      );

    return (
      <div className="about-page">
        <div className="about transform row">
          <div className="white-box"></div>
          <div className="inner-about">
            <h1>ABOUT US</h1>
          </div>

          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <img src="/img/img42.jpg" alt="cocomo" width="100%" />

            <h1 className="about-head">ABOUT US</h1>

            <div className="maroon-box">
              <div className="maroon-line"></div>
            </div>

            {/* <div className='backarea'>
                  <div className='boxed transform'></div>
               </div> */}

            {/* <input
                  type='button'
                  id='button2'
                  value='Dark Mode'
                  className='btn btn-warning m-2'
               ></input> */}

            <p className="abouttext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
              cupiditate perspiciatis beatae doloremque inventore enim saepe,
              quibusdam, repudiandae modi eligendi nam maxime vitae architecto
              corrupti in illum libero nemo facereee.
            </p>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }
}

export default About;
