// import React from "react";
// import "./servic.css";
// import img from "../../assets/images/img8.png";
// import img1 from "../../assets/images/img9.png";
// import img2 from "../../assets/images/img10.png";
// import img3 from "../../assets/images/img11.png";
// import img4 from "../../assets/images/img12.png";
// import img5 from "../../assets/images/img13.png";

// const Service = () => {
//   return (
//     <>
//       <div>
//         <div
//           className="container-fluid my-5 py-3"
//           // style={{ backgroundColor: "#159EEC" }}
//         >
//           <div className="container text-center">
//             <div className="row">
//               <div className="mb-4">
//                 <h3 className="heading_3 mb-0">Lorem ipsum dolor sit amet</h3>
//                 <h1 className="heading_1 mb-3">Our Services</h1>
//               </div>
//               <div className="col-12 col-lg-2">
//                 <div className="">
//                   <div className="box-1 p-2">
//                     <div>
//                       <img src={img3} alt="" className="w-50" />
//                     </div>
//                     <h6
//                       className="my-2"
//                       style={{ fontSize: "13px", color: "black" }}
//                     >
//                       Comprehensive Assessment
//                     </h6>
//                   </div>
//                   <div className="box-2 p-2">
//                     <div>
//                       <img src={img4} alt="" className="w-50" />
//                     </div>
//                     <h6
//                       className="my-2"
//                       style={{ fontSize: "13px", color: "gray" }}
//                     >
//                       Early interventions
//                     </h6>
//                   </div>
//                   <div className="box-3 p-2">
//                     <div>
//                       <div>
//                         <img src={img5} alt="" className="w-50" />
//                       </div>
//                       <h6
//                         className="my-2"
//                         style={{ fontSize: "13px", color: "black" }}
//                       >
//                         Transition program
//                       </h6>
//                       <div>
//                         <img src={img2} alt="" className="w-50" />
//                       </div>
//                       <h6
//                         className="my-2"
//                         style={{ fontSize: "13px", color: "black" }}
//                       >
//                         Social skills programs
//                       </h6>
//                     </div>
//                   </div>
//                   <div className="box-5">
//                     <p>View All</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-12 col-lg-6">
//                 <div className="ul d-flex flex-row justify-content-center align-item-center">
//                   <ul className="">
//                     <li className="d-flex flex-row justify-content-ceneter align-items-center">
//                       <i className="bi bi-dot "></i>
//                       <a> Lorem ipsum dolor</a>
//                     </li>
//                     <li className="d-flex flex-row justify-content-ceneter align-items-center">
//                       <i className="bi bi-dot "></i>
//                       <a> Lorem ipsum dolor</a>
//                     </li>
//                     <li className="d-flex flex-row justify-content-ceneter align-items-center">
//                       <i className="bi bi-dot "></i>
//                       <a> Lorem ipsum dolor</a>
//                     </li>
//                   </ul>
//                   <ul className="">
//                     <li className="d-flex flex-row justify-content-ceneter align-items-center">
//                       <i className="bi bi-dot "></i>
//                       <a> Lorem ipsum dolor</a>
//                     </li>
//                     <li className="d-flex flex-row justify-content-ceneter align-items-center">
//                       <i className="bi bi-dot "></i>
//                       <a> Lorem ipsum dolor</a>
//                     </li>
//                     <li className="d-flex flex-row justify-content-ceneter align-items-center">
//                       <i className="bi bi-dot "></i>
//                       <a> Lorem ipsum dolor</a>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="ms-5 paragraph_2">
//                   <p className="text-start">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Quisque placerat scelerisque tortor ornare ornare. Quisque
//                     placerat scelerisque tortor ornare ornare Convallis felis
//                     vitae tortor augue. Velit nascetur proin massa in. Consequat
//                     faucibus porttitor enim et.
//                   </p>
//                   <p className="text-start">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Quisque placerat scelerisque. Convallis felis vitae tortor
//                     augue. Velit nascetur proin massa in.
//                   </p>
//                 </div>
//               </div>
//               <div className="col-12 col-lg-4">
//                 <div className="image_cont mb-3">
//                   <img src={img} alt="" className="w-75 rounded" />
//                 </div>
//                 <div className="image_cont_2 mt-3">
//                   <img src={img1} alt="" className="w-75 rounded" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Service;

import React, { useState } from "react";
import "./servic.css";
import img from "../../assets/images/img8.png";
import img1 from "../../assets/images/img9.png";
import img2 from "../../assets/images/img10.png";
import img3 from "../../assets/images/img11.png";
import img4 from "../../assets/images/img12.png";
import img5 from "../../assets/images/img13.png";
import { Link } from "react-router-dom";

const Service = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      img: img3,
      title: "Comprehensive Assessment",
      content: "This is the content for Comprehensive Assessment.",
    },
    {
      img: img4,
      title: "Early interventions",
      content: "This is the content for Early Interventions.",
    },
    {
      img: img5,
      title: "Transition program",
      content: "This is the content for Transition Program.",
    },
    {
      img: img2,
      title: "Social skills programs",
      content: "This is the content for Social Skills Programs.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container-fluid my-5 py-3">
      <div className="container text-center">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="mb-4">
            <h3 className="heading_3 mb-0">Lorem ipsum dolor sit amet</h3>
            <h1 className="heading_1 mb-3">Our Services</h1>
          </div>

          <div className="col-12 col-md-4">
            <div className="repo">
              {services.map((service, index) => (
                <div key={index}>
                  <div
                    className={`box-1 p-2 ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleClick(index)}
                    style={{
                      cursor: "pointer",
                      backgroundColor: activeIndex === index ? "#1f2b6c" : "",
                      color: activeIndex === index ? "white" : "black",
                    }}
                  >
                    <div>
                      <img
                        src={service.img}
                        alt={service.title}
                        className="w-50 mt-2"
                      />
                    </div>
                    <h6
                      className="my-1"
                      style={{
                        fontSize: "13px",
                      }}
                    >
                      {service.title}
                    </h6>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="box-5">
              <Link to="/ABA" className="text-decoration-none">
                <p>View All</p>
              </Link>
            </div> */}
          </div>

          <div className="col-12 col-md-4 d-flex flex-column justify-content-center align-items-center">
            <div className="content-display">
              <h2>{services[activeIndex].title}</h2>
              <p>{services[activeIndex].content}</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="image_cont mb-3">
              <img src={img} alt="" className="w-100 rounded" />
            </div>
            <div className="image_cont_2 mt-3">
              <img src={img1} alt="" className="w-100 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
