import React, { useState } from "react";
import "./form.css";
import axios from "axios";

const Form = () => {
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
    <div className="container-fluid form-conten mt-2">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Left Section */}
          <div className="col-12 col-md-8 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="heading-1">
              Book an <br />
              Appointment
            </h1>
            <p className="para_2">Fill in your details to schedule a visit</p>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-8 col-lg-6">
            <form className="text-white" onSubmit={handalSum}>
              <div className="d-flex flex-column">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  id="Name"
                  placeholder="Enter your name"
                  name="username"
                  value={formdata.username}
                  onChange={(e) => handalForm(e)}
                />
                {errors.username && (
                  <span className="error-text">{errors.username}</span>
                )}
              </div>
              <div className="d-flex flex-column mt-3">
                <label htmlFor="number">Phone Number</label>
                <input
                  type="tel"
                  id="number"
                  placeholder="Enter your phone number"
                  name="phone"
                  value={formdata.phone}
                  onChange={(e) => handalForm(e)}
                />
                {errors.phone && (
                  <span className="error-text">{errors.phone}</span>
                )}
              </div>
              <div className="d-flex flex-column mt-3">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  placeholder="Select a date"
                  name="data"
                  value={formdata.data}
                  onChange={(e) => handalForm(e)}
                />
                {errors.data && (
                  <span className="error-text">{errors.data}</span>
                )}
              </div>
              <div className="d-flex flex-column mt-3">
                <label htmlFor="message">Message</label>
                <textarea
                  id="text"
                  placeholder="Any additional information"
                  name="message"
                  value={formdata.message}
                  onChange={(e) => handalForm(e)}
                ></textarea>
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
              </div>
              <button className="btn_1 my-4">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
