import "./aba.css";
import img from "../../assets/images/img6.jpg";
import Getincontent from "../../commen/GETINCONTENT/Getincontent";
import Abacart from "../../commen/ABA CARD TEROPY/Abacart";
const Aba = () => {
  return (
    <>
      <div className="ABA_bg">
        <div className="ms-5 ps-5">
          <p className="aba_span mb-0 ms-3">
            <a href="/">Home</a> / <a>ABA THEROPY</a>
          </p>
          <h4 className="aba_heading">ABA Therapy</h4>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="text-center">
            <h1 className="aba_heading_2 mb-3">About ABA Therapy</h1>
            <p className="aba_para_top text-capitalize mt-4 mb-4">
              What to Expect from ABA Therapy: Helping Your Child Thrive with
              Individualized Support
            </p>
          </div>
          <div className="col-12">
            <div className="text-center">
              <img src={img} alt="" className=" img-fluid w-50 rounded-4" />
            </div>
          </div>
        </div>
        <Abacart />
        <Getincontent />
      </div>
    </>
  );
};

export default Aba;
