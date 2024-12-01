import './services.css'
import img1 from '../../assets/images/img18.png'
import img2 from '../../assets/images/img19.png'
import img3 from '../../assets/images/img20.png'
import img4 from '../../assets/images/img21.png'
import img5 from '../../assets/images/img22.png'
import img6 from '../../assets/images/img23.png'
import img7 from '../../assets/images/img24.png'
import img8 from '../../assets/images/img25.png'
import img9 from '../../assets/images/img26.png'
import img10 from '../../assets/images/img27.png'
import img11 from '../../assets/images/img28.png'
import img12 from '../../assets/images/img29.png'
const Services = () => {
  return (
   <>
    <div className="service_bg">
        <div className="services_content_top ms-5 ps-5">
            <p className='service_span mb-0 ms-2'><a href="/">Home</a> / <a>Services</a></p>
            <h4 className='service_heading'>Oue Services</h4>
        </div>
    </div>
    <div className=' container my-5'>
        <div className="row card_row">
           <div className="col-12 col-md-5 col-lg-4 p-3 card_col">
            <div className="card">
                <div>
                    <img src={img1} alt="" className=' img-fluid card_img' />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className='text-center ms-4 w-75 card_heading'>Comprehensive Assessment</h5>
                        <p className='text-start w-75 card_para'>We assess skills and behaviors to create a personalized treatment plan.</p>
                       <div className='d-flex flex-row justify-content-start align-items-center'>
                       <a href="" className=' text-decoration-none'>Show more</a>
                       <i className="fa-solid fa-arrow-right mx-2"></i>
                       </div>
                    </div>
                </div>
                <div className='card_round_img p-3'>
                    <img src={img7} alt="" className=' img-fluid me-auto' />
                </div>
            </div>
           </div>
           <div className="col-12 col-md-5 col-lg-4 p-3 card_col">
            <div className="card">
                <div>
                    <img src={img2} alt="" className=' img-fluid' />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className='text-center ms-4 w-75 card_heading mb-3'>Early interventions</h5>
                        <p className='text-start w-75 card_para mt-3 mb-3'>Programs for children under 4 with Autism and developmental disabilities.</p>
                       <div className='d-flex flex-row justify-content-start align-items-center'>
                       <a href="" className=' text-decoration-none'>Show more</a>
                       <i className="fa-solid fa-arrow-right mx-2"></i>
                       </div>
                    </div>
                </div>
                <div className='card_round_img p-3'>
                    <img src={img8} alt="" className=' img-fluid me-auto' />
                </div>
            </div>
           </div>
           <div className="col-12 col-md-5 col-lg-4 p-3 card_col">
            <div className="card">
                <div>
                    <img src={img3} alt="" className=' img-fluid' />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className='text-center ms-4 w-75 card_heading mb-3 mt-3'>Transition program</h5>
                        <p className='text-start w-75 card_para mt-4'>Helps with essential social skills for transitioning.</p>
                       <div className='d-flex flex-row justify-content-start align-items-center mt-4'>
                       <a href="" className=' text-decoration-none'>Show more</a>
                       <i className="fa-solid fa-arrow-right mx-2"></i>
                       </div>
                    </div>
                </div>
                <div className='card_round_img p-3'>
                    <img src={img9} alt="" className=' img-fluid me-auto' />
                </div>
            </div>
           </div>
           <div className="col-12 col-md-5 col-lg-4 p-3 card_col">
            <div className="card">
                <div>
                    <img src={img4} alt="" className=' img-fluid' />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className='text-center ms-4 w-75 card_heading'>Social skills programs</h5>
                        <p className='text-start w-75 card_para'>Break down complex skills into smaller parts for systematic teaching; Transition Programs focus on skills......</p>
                       <div className='d-flex flex-row justify-content-start align-items-center'>
                       <a href="" className=' text-decoration-none'>Show more</a>
                       <i className="fa-solid fa-arrow-right mx-2"></i>
                       </div>
                    </div>
                </div>
                <div className='card_round_img_2 p-3'>
                    <img src={img10} alt="" className=' img-fluid me-auto' />
                </div>
            </div>
           </div>
           <div className="col-12 col-md-5 col-lg-4 p-3 card_col">
            <div className="card">
                <div>
                    <img src={img5} alt="" className=' img-fluid' />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className='text-center ms-4 w-75 card_heading'>School Readiness Program</h5>
                        <p className='text-start w-75 card_para'>school readiness is a primary goal for children with autism. ABA therapy helps prepare children for a traditional classroom.....</p>
                       <div className='d-flex flex-row justify-content-start align-items-center'>
                       <a href="" className=' text-decoration-none'>Show more</a>
                       <i className="fa-solid fa-arrow-right mx-2"></i>
                       </div>
                    </div>
                </div>
                <div className='card_round_img_2 p-3'>
                    <img src={img11} alt="" className=' img-fluid me-auto' />
                </div>
            </div>
           </div>
           <div className="col-12 col-md-5 col-lg-4 p-3 card_col">
            <div className="card">
                <div>
                    <img src={img6} alt="" className=' img-fluid' />
                </div>
                <div className="card-body">
                    <div>
                        <h5 className='text-center ms-4 w-75 card_heading'>Parent training</h5>
                        <p className='text-start w-75 card_para'>parental involvement is crucial to a child’s progress. We schedule regular meetings and consultations with families to discuss their child's programs......</p>
                       <div className='d-flex flex-row justify-content-start align-items-center'>
                       <a href="" className=' text-decoration-none'>Show more</a>
                       <i className="fa-solid fa-arrow-right mx-2"></i>
                       </div>
                    </div>
                </div>
                <div className='card_round_img_2 p-3'>
                    <img src={img12} alt="" className=' img-fluid me-auto' />
                </div>
            </div>
           </div>
        </div>
    </div>
   </>
  )
}

export default Services