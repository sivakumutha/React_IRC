// import React from 'react';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../navbar.css';

function Nav() {
  const [active, setActive] = useState('nav__menu');
  const [icon, setIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive((prev) => (prev === 'nav_menu' ? 'navmenu navactive' : 'nav_menu'));

    // Icon Toggler
    setIcon((prev) => (prev === 'nav_toggler' ? 'navtoggler toggle' : 'nav_toggler'));
  };

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
       Vehicle Service
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            Login
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/signup" className="nav__link">
            Signup
          </Link>
        </li>
        {/* Add other links as needed */}
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;














// const Nav =()=>
// {
//     return (
//         <>
        {/* <nav class="navbar navbar-default navbar-fixed-top navbar-shrink">
    <div class="container">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header page-scroll">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand page-scroll" href="#page-top">Celine Is Awesome</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li class="hidden active">
            <a href="#page-top"></a>
          </li>
          <li class="">
            <a class="page-scroll" href="#services">Services</a>
          </li>
          <li class="">
            <a class="page-scroll" href="#portfolio">Portfolio</a>
          </li>
          <li class="">
            <a class="page-scroll" href="#about">About</a>
          </li>
          <li class="">
            <a class="page-scroll" href="#team">Team</a>
          </li>
          <li class="">
            <a class="page-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  // </nav> */}




  //       <div class="navbar">
  //   <a href="#home"><h1>Event Management System</h1></a> 
  //    <a href="">Login</a>
  // </div>
  //  <div class="navitems">
  //   {/* <a href="#about">About</a>
  //   <a href="#services">Services</a> */}

  // </div> 
        {/* <div class="navbar">
       {/* <a class="navbar-brand page-scroll" href="#page-top">Celine Is Awesome</a> */}
       {/* <div class="nav_items">
            
       <a href="#" class="nav_link">Homyz</a>
       </div>

        
          <a href="#" class="nav_link">Product</a>
          <a href="#" class="nav_link">Services</a>
          <a href="#" class="nav_link">Contact</a> */}
        {/* </ul> */}

        {/* </div> */}
//         </>
//     )
// }
// export default Nav;