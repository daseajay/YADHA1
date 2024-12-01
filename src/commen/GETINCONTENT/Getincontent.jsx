import React from "react";
import "./getincontent.css";
import { PiPhoneCallDuotone } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { IoTimeOutline } from "react-icons/io5";

const Getincontent = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="text-center mt-3 mb-5">
          <p className="getinpara">Get in touch</p>
          <h1 className="getinheader">Contact</h1>
        </div>
        <div className="row mb-5">
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="getindivs">
              <PiPhoneCallDuotone className="fs-2 mb-3" />
              <h6>EMERGENCY</h6>
              <p>(237) 681-812-255</p>
              <p>(237) 666-331-894</p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="getindivs">
              <SlLocationPin className="fs-2 mb-3" />
              <h6>LOCATION</h6>
              <p>0123 Some place</p>
              <p>9876 Some country</p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="getindivs">
              <HiOutlineMail className="fs-2 mb-3" />
              <h6>EMAIL</h6>
              <p>fildineeesoe@gmil.com</p>
              <p>myebstudios@gmail.com</p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-lg-3 mb-4">
            <div className="getindivs">
              <IoTimeOutline className="fs-2 mb-3" />
              <h6>WORKING HOURS</h6>
              <p>Mon-Sat 09:00-20:00</p>
              <p>Sunday Emergency</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getincontent;
