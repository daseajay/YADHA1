import "./contact.css";
import img from "../../assets/images/img31.png";
import img2 from "../../assets/images/img32.png";
import Getin from "../../commen/form/Getin";

const Contact = () => {
  return (
    <>
      <div className="contact_bg">
        <div className="ms-5 ps-5">
          <p className="mb-0 contact_span ms-3">
            <a href="/" className=" text-decoration-none">
              Home
            </a>{" "}
            / <a>Contact</a>
          </p>
          <h4 className="contact_heading">Contact Us</h4>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="text-center">
            <h1 className="contact_heading_2 text-capitalize mb-4">
              Contact information
            </h1>
            <p className="contact_para">
              At Yaadha ABA Center, we are committed to supporting individuals
              with autism and their families.For inquiries or to learn more
              about our services, reach out to us today.
            </p>
            <p className="contact_para mt-4">
              We are here to help—contact us via phone, email, or visit our
              center for personalized support.
            </p>
          </div>
          <div className="col-12 mt-4">
            <div className="d-flex flex-row justify-content-evenly align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="contact_card">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="mt-4">
                  <p className="mt-2  contact_para_con">info@yaadha.com</p>
                  <p className="mt-2  contact_para_con">abc@yaadha.com</p>
                </div>
              </div>
              <div className="contact_line">
                <div>
                  <img src={img} alt="" />
                </div>
                <img src={img2} alt="" height={10} className="img_dot" />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="contact_card">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="mt-4">
                  <p className="mt-2  contact_para_con">
                    3-4-174/15/1/A, Radha Krishna Nagar, Attapur, Telangana
                    500048
                  </p>
                  <p className="mt-2  contact_para_con">
                    Attapur, Telangana 500048
                  </p>
                </div>
              </div>
              <div className="contact_line">
                <div>
                  <img src={img} alt="" />
                </div>
                <img src={img2} alt="" height={10} className="img_dot" />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="contact_card">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="mt-4">
                  <p className="mt-2 contact_para_con">+91 123 456 7890</p>
                  <p className="mt-2 contact_para_con">+91 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Getin />
    </>
  );
};

export default Contact;
