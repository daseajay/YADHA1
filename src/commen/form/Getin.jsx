import React, { useState } from "react";
import axios from "axios";
import "./Get.css";
const Getin = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    phone: "",
    data: "",
    message: "",
  });
  const handalForm = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handalSum = async (e) => {
    e.preventDefault();
    console.log(formdata);

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setFormdata({
      username: "",
      phone: "",
      data: "",
      message: "",
    });
    try {
      const response = await axios.post("/api/user/getin", formdata);
      if (response.data.success) {
        alert("Email sent successfully");
        // empty filed funtionality
      }
      if (formdata === "") {
        return;
      }
    } catch (error) {
      alert("Error sending email: " + error.message);
    }
  };

  // errror handaling
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formdata.username.trim()) {
      newErrors.username = "Full Name is required";
    }

    if (!formdata.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formdata.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formdata.data.trim()) {
      newErrors.data = "Preferred date is required";
    }

    if (!formdata.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  return (
    <>
      <div className="container-fluid form-contens">
        <div className="row check ">
          <div className="col-12 col-md-6 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4138.15347523254!2d78.42093605130708!3d17.36961644989504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9653baa91eb5%3A0x676e2e9c2140740e!2sYaadha%20ABA%20center!5e0!3m2!1sen!2sin!4v1729253450154!5m2!1sen!2sin"
              width="700"
              height="410"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="iframe"
            ></iframe>
          </div>
          <div className=" col-12 col-md-4 col-lg-4">
            <form onSubmit={handalSum}>
              <div className="mb-2">
                <label className="labeltext">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="username"
                  value={formdata.username}
                  onChange={(e) => handalForm(e)}
                />
                {errors.username && (
                  <span className="error-text">{errors.username}</span>
                )}
              </div>
              <div className="mb-2">
                <label className="labeltext">Phone Number</label>
                <input
                  type="number"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formdata.phone}
                  onChange={(e) => handalForm(e)}
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>
              <div className="mb-2">
                <label className="labeltext">Preferred Date</label>
                <input
                  type="date"
                  placeholder="Select a date"
                  name="data"
                  value={formdata.data}
                  onChange={(e) => handalForm(e)}
                />
                {errors.data && (
                  <span className="error-text">{errors.data}</span>
                )}
              </div>
              <div className="mb-2">
                <label className="labeltext">Message</label>
                <textarea
                  className=" form-control"
                  placeholder="Any additional information"
                  name="message"
                  value={formdata.message}
                  onChange={(e) => handalForm(e)}
                ></textarea>
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
              </div>
              <button type="submit" className="btn_1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Getin;
