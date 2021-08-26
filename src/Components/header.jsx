import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className='new-header'>
        <Link to='/'>
          <img src='/img/logo5.png' alt='Logo' className='logo' />
        </Link>
      </div>
      // <nav className='navbar navbar-expand-md sticky-top navbar-light header'>
      //   <Link className='navbar-brand ml-3' to='/'>
      //     <img src='/img/logo5.png' alt='Logo' width='100px' className='logo' />
      //   </Link>

      //   <button
      //     className='navbar-toggler'
      //     type='button'
      //     data-toggle='collapse'
      //     data-target='#navbarNav'
      //     aria-controls='navbarNav'
      //     aria-expanded='false'
      //     aria-label='Toggle navigation'
      //   >
      //     <span className='navbar-toggler-icon' />
      //   </button>

      //   <div className='collapse navbar-collapse' id='navbarNav'>
      //     <ul className='navbar-nav ml-auto '>
      //       <li className='nav-item mr-4'>
      //         {/* <Link className='nav-link' to='/'>
      //                   Home
      //                </Link> */}
      //         <Link className='nav-link' to='/'>
      //           <div className='link-t link-t-header'>
      //             <p>Home</p>
      //             <div></div>
      //           </div>
      //         </Link>
      //       </li>

      //       <li className='nav-item mr-4'>
      //         {/* <Link className='nav-link' to='/about'>
      //           About Us
      //         </Link> */}
      //          <Link className='nav-link' to='/about'>
      //          <div className='link-t link-t-header'>
      //             <p>About</p>
      //             <div></div>
      //          </div>
      //       </Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}

export default Header;
