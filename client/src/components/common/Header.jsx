import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Header Top Section */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="select-lang">
                <img
                  src="/images/language-box.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="dropdown top-header-font-resize">
                <button
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="/images/user_accessibility.png"
                    width=""
                    height=""
                    alt="ssy_user_accessibility"
                  />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    -A
                  </a>
                  <a className="dropdown-item" href="#">
                    A
                  </a>
                  <a className="dropdown-item" href="#">
                    +A
                  </a>
                  <a className="dropdown-item" href="#">
                    A
                  </a>
                  <a className="dropdown-item" href="#">
                    A
                  </a>
                </div>
              </div>
              <div className="screen_reader">
                <a href="#">Screen Reader</a>
              </div>
            </div>
            <div className="col-md-4 text-right">
            <Link to="/login" className="application_btm">
              Employee Login
            </Link>
            <Link to="/login" className="login_btm">
              Admin Login
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <div id="fixed-menu" className="menu">
        <div className="container">
          <div className="row">
            <div className="">
              <nav className="navbar navbar-expand-lg">

               <div className="col-md-3 text-left">

               
                 <Link to="/" className="navbar-brand">
                  
                  <div className="main-logo">
                    <img
                      src="/images/labour_logo.png"
                      alt=""
                      width=""
                      height=""
                      className="img-fluid"
                    />
                  </div>
                  </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

               </div>
               
                <div
                  className="collapse navbar-collapse col-md-9 text-right"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Acts & Rules
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Circulars & Notifications
                      </a>
                    </li>
                      <li className="nav-item dropdown" id="myDropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="about-us.html"
                        data-bs-toggle="dropdown"
                      >
                       Citizen Corner
                      </a>
                    
                      <ul className="dropdown-menu">
                        <li>
                        <Link to="/faq" className="dropdown-item">
                          FAQ
                        </Link>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="history-overview.html"
                          >
                            May we help you
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="history-overview.html"
                          >
                            Right to public services
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="history-overview.html"
                          >
                           Citizen Charter
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown" id="myDropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="about-us.html"
                        data-bs-toggle="dropdown"
                      >
                        e-Services
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a
                            className="dropdown-item"
                            href="history-overview.html"
                          >
                            Forms &amp; Procedures
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Tenders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        RTI
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Media
                      </a>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
