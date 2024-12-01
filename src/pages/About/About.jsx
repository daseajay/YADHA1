import "./about.css";
import img from "../../assets/images/img15.png";
// import img1 from "../../assets/images/img2.png";
import Slider from "react-slick";

const data = [
  {
    title:
      "We’ve seen amazing progress in our child’s communication since joining Yaadha. The team is outstanding!",
    name: "Sanjeev",
  },
  {
    title:
      "We’ve seen amazing progress in our child’s communication since joining Yaadha. The team is outstanding!",
    name: "Sanjeev",
  },
  {
    title:
      "We’ve seen amazing progress in our child’s communication since joining Yaadha. The team is outstanding!",
    name: "Sanjeev",
  },
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" About_bg">
        <div className="ms-5 ps-5">
          <p className="mb-0 pb-0 ms-3 about_span">
            
            <a href="/">Home</a> / <a>About</a>
          </p>
          <h1 className="about_heading">About US</h1>
        </div>
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="row p-5">
          <div className="col-12 col-lg-6">
            <div>
              <img src={img} alt="" className=" img-fluid" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div>
              <h4 className="about_heading_2 text-uppercase mb-2 mt-1">
                Welcome to Yaadha Aba Center
              </h4>
              <h1 className="about_main_heading">
                HARIKA PATLOLLA <span>(Director)</span>
              </h1>
              <p className="text-center about_main_para me-5 mt-2 mb-4">
                BCBA (USA BOARD) <br />
                M.Sc. (Psychology), M.Tech, B.Ed. Spl Edu, IBA (International
                Behaviour Analyst)
              </p>
            </div>
            <div>
              <ul className="List_abou list-unstyled">
                <li>
                  <span className="fw-bold">Exceptional ABA Services:</span>
                  Utilizing Applied Behavior Analysis to teach, maintain, and
                  generalize skills.
                </li>
                <li>
                  <span className="fw-bold">Comprehensive Approach:</span>
                  Addressing skill development and reducing inappropriate
                  behaviors.
                </li>
                <li>
                  <span className="fw-bold">Personalized Programs:</span>
                  Offering 1:1 sessions with Individualized Education Plans
                  (IEPs).
                </li>
                <li>
                  <span className="fw-bold">Focused on Potential:</span> Helping
                  children with autism and developmental disabilities maximize
                  their.
                </li>
                <li>
                  <span className="fw-bold">Trusted Partner:</span> Providing
                  compassionate support for families in their child's
                  development journey.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {/* <img src={img1} alt=""  className='about_img_postion'/> */}
        </div>
      </div>
      <div className="container-fluid Slide_about">
        <div className="row">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div
                className="col-12  d-flex flex-column-reverse justify-content-center align-items-center"
                key={index}
              >
                <div className="w-50 ms-4">
                  <div className="mb-4 text-center icon_about_comma">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                  <h5 className="text-center h5_heading_about">{item.title}</h5>
                  <div className="mt-5 pt-2">
                    <hr className="w-25 mx-auto hr_about" />
                    <h6 className="text-center h6_heading_about">
                      {item.name}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container my-5  why-choose-section">
        <h2 className="text-center choose-heading">
          HERE’S HOW WE SUPPORT YOUR CHILD’S SUCCESS
        </h2>
        <h3 className="text-center choose-subheading">
          WHY CHOOSE YAADHA ABA CENTER
        </h3>
        <div className="row">
          <div className="col-12 col-md-12">
            <ul className="choose-list">
              <li className="choose-item">
                <div className="choose-number">1</div>
                <div className="choose-content">
                  <h5>
                    Comprehensive Support:
                    <span className="">
                      Tailored programs for autism, ADHD, and developmental
                      delays.
                    </span>
                  </h5>
                </div>
              </li>
              <li className="choose-item">
                <div className="choose-number_2">2</div>
                <div className="choose-content">
                  <h5>
                    Expert Care:
                    <span className="">
                      Dedicated ABA therapy and interventions for unique needs.
                    </span>
                  </h5>
                </div>
              </li>
              <li className="choose-item">
                <div className="choose-number">3</div>
                <div className="choose-content">
                  <h5>
                    Family-Centered Approach:
                    <span className="">
                      Empowering families with education and resources.
                    </span>
                  </h5>
                </div>
              </li>
              <li className="choose-item">
                <div className="choose-number_2">4</div>
                <div className="choose-content">
                  <h5>
                    Advocacy & Awareness:
                    <span className="">
                      Committed to research and raising awareness for a brighter
                      future.
                    </span>
                  </h5>
                </div>
              </li>
              <li className="choose-item">
                <div className="choose-number">5</div>
                <div className="choose-content">
                  <h5>
                    Holistic Development:
                    <span className="">
                      Fostering communication and life skills for lasting
                      impact.
                    </span>
                  </h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
