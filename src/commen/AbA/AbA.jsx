import React from "react";
// import "./aba.css";
import img from "../../assets/images/image1.png";
import img2 from "../../assets/images/image2.png";
import img3 from "../../assets/images/image3.png";
import img4 from "../../assets/images/image4.png";
import img5 from "../../assets/images/image5.png";
import img6 from "../../assets/images/image6.png";
import img7 from "../../assets/images/image7.png";
import img8 from "../../assets/images/image8.png";

const AbA = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h3 className="aba-h3 text-uppercase">
              Lorem ipsum dolor sit amet
            </h3>
            <h1 className="aba_h1">About ABA Therapy</h1>
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="image_content d-flex flex-wrap my-3 justify-content-center align-items-center">
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Science-Based Approach</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img2} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Behavior Understanding</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img3} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Environmental Impact</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img4} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Learning Mechanisms</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img5} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Real-World Application</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img6} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Positive Behavior Reinforcement</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img7} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Skill Development</p>
                  </div>
                </div>
                <div className="col-12 col-md-4 mb-4">
                  <div className="border box">
                    <div className="my-3">
                      <img src={img8} alt="" className="me-auto" height={70} />
                    </div>
                    <p>Meaningful Change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbA;
