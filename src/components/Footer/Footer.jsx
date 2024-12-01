import React from "react";
import "./Foot.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-12  col-md-3 mb-3">
                <div className="text-center">
                  <h2 className=" fothead">YAADHA ABA</h2>
                  <p className="fotpara">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque placerat scelerisque tortor ornare ornare
                  </p>
                </div>
              </div>

              <div className="col-6   col-md-2 mb-3">
                <h5 className="fs-5 text-white mb-5">Important Links</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1">
                      Appointment
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1 text-white">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1">
                      Services
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-6  col-md-3 mb-3">
                <h5 className="fs-5  text-white mb-5">Contact Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1">
                      Call: +91-1234567890
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1">
                      Email: Example@gmail.com
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link-1 p-1">
                      Address: 0123 Some place
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-3 col-lg-3 offset-md-1 mb-3">
                <form className="">
                  <h5 className="text-white mb-5">Newsletter</h5>
                  <div className="d-flex flex-row justify-content-center align-items-center  w-100  fot-form  rounded">
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-input rounded"
                      placeholder="Enter your email address"
                    />
                    <div className="me-4">
                      <i className="fa-solid fa-paper-plane fs-4"></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
              <p className="fot">
                © 2024 YAADHA ABA CENTER All Rights Reserved
              </p>
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="ms-3 link-icon">
                  <a className=" link-dark" href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="ms-3 link-icon">
                  <a className=" link-dark" href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="ms-3 link-icon">
                  <a className=" link-dark" href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
