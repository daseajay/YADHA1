import React from "react";
import "./Home.css";
import video from "../../assets/videos/aba_2.mp4";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img7.png";
import Service from "../../commen/service/Service";
import AbA from "../../commen/AbA/AbA";
import Form from "../../commen/form/Form";
import Getincontent from "../../commen/GETINCONTENT/Getincontent";

const Home = () => {
  return (
    <>
      <div className="container-fluid  video-background">
        <video autoPlay loop muted playsInline className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-12">
            <div className="content_2 mt-5 text-center">
              <h3 className="text-uppercase mb-1">welcome to yaadha aba</h3>
              <h1 className="mt-1">
                Your Child’s Second Home for Growth and Discovery]
              </h1>
              <div className="d-flex flex-row justify-content-center mt-2">
                <p className="">
                  At Yaadha ABA Center, we are dedicated to transforming lives
                  through exceptional behavior treatment services, grounded in
                  the principles of Applied Behavior Analysis (ABA). Our
                  scientific approach focuses on teaching meaningful, socially
                  significant skills and continuously measuring progress to
                  ensure success.
                </p>
              </div>

              <div className="d-flex flex-row justify-content-center align-items-center">
                <a
                  href=""
                  className="d-flex flex-row justify-content-center align-items-center"
                >
                  Read More
                </a>
                <i className="bi bi-arrow-right-short"></i>
              </div>
            </div>
            <div className="text-center">
              <img src={img2} alt="img2" className="img_3 me-auto" />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <AbA />
      <Form />
      <Getincontent />
    </>
  );
};

export default Home;
