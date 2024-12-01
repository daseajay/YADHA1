import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            YAADHA ABA CENTER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon fs-1"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                YAADHA ABA CENTER
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item my-3 my-lg-0">
                  <Link
                    to="/"
                    className={`nav-link mx-3 ${
                      activeItem === "home" ? "active-item" : ""
                    }`}
                    aria-current="page"
                    href="#"
                    onClick={() => handleItemClick("home")}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item my-3 my-lg-0">
                  <Link
                    to="/services"
                    className={`nav-link mx-3 ${
                      activeItem === "services" ? "active-item" : ""
                    }`}
                    href="#"
                    onClick={() => handleItemClick("services")}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item my-3 my-lg-0">
                  <Link
                    to="/about"
                    className={`nav-link mx-3 ${
                      activeItem === "about" ? "active-item" : ""
                    }`}
                    href="#"
                    onClick={() => handleItemClick("about")}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item my-3 my-lg-0">
                  <Link
                    to="/contact"
                    className={`nav-link mx-3 ${
                      activeItem === "contact" ? "active-item" : ""
                    }`}
                    href="#"
                    onClick={() => handleItemClick("contact")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item my-3 d-lg-none d-block d-md-block">
                  <Link className="nav-button-2 text-decoration-none" to="/aba">
                    ABA Therapy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <Link className="nav-button ms-5 text-decoration-none" to="/aba">
              ABA Therapy
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
