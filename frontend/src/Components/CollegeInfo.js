import React from 'react';
// import { Col, Row } from 'react-bootstrap';
import './CollegeInfo.css'; // Import your CSS file for additional styling

const CollegeInfo = () => {
  return (
    // <div className='clg-div'>
    //   <Row className="college-info-container align-items-center">
    //   <Col md={4} className="text-center">
    //     {/* Your college logo */}
    //     <img src="/Images/RGPVLOGO.jpg" style={{ width: "130px", height: "130px", backgroundColor: '#000', borderRadius: '100px', marginRight: '10px', marginLeft: '25px' }} alt="College Logo" className="img-fluid" />
    //   </Col>
    //   <Col md={8} className="branch-title text-center">
    //     <h2>Department of Computer Science & Engineering</h2>
    //     <p>University Institute of Technology</p>
    //     <p>Rajiv Gandhi Prodiki Vishwavidyalaya</p>
    //     <p>(State Technological University)</p>
    //     <p>Bhopal, Madhya Pradesh</p>
    //   </Col>
    // </Row>
    // </div>

    <>
      {/* <div className='clg-div'>
        <div className="image">
          <a href="https://www.uitrgpv.ac.in/">
            <img src="/Images/RGPVLOGO.jpg" style={{ width: "60px", height: "60px", backgroundColor: '#000', borderRadius: '100px', marginRight: '10px', marginLeft: '25px' }} alt="RGPV_LOGO"></img>
          </a>
        </div>
        <div className="branch-heading">
          <h1>Department of Computer Science & Engineering</h1>
          <p>University Institute of Technology <br /> Rajiv Gandhi Proudyogiki Vishwavidyalaya <br />(State Technological University of Madhya Pradesh) <br />Bhopal (M.P)</p>
        </div> */}

      {/* </div> */}
      <div className="middle_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="logo_inline">
                <div className="logo_box" style={{marginRight:"20px"}}>
                  <a href="https://www.uitrgpv.ac.in/">
                    <img src="/Images/RGPVLOGO.jpg" className="img-fluid" alt=""></img>
                  </a>
                </div>
                <div className="logo_text">
                    <h2 style={{marginBottom:"-20px"}}>Department of Computer Science & Engineering</h2>
                    <h4 style={{marginBottom:"-20px"}}>University Institute of Technology</h4>
                    <h4 style={{marginBottom:"-20px"}}>Rajiv Gandhi Proudyogiki Vishwavidyalaya</h4>
                    <h4 >Bhopal (M.P)</h4>
                    {/* <h4>Narsingharh By Pass Road Near Gandhi Nagar, Bhopal (M.P) </h4> */}
                </div>
              </div>
            </div>
            {/* <!--<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="search_menu">
                <a href="#" className="download_app" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Our App">
                  <span><img src="imagesN/google-play2.png" className="img-fluid" alt="" /> Download App </span>
                </a>
                <a href="#" className="search_open"><i className="fa fa-search"> </i> Search </a>
              </div>
            </div>--> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeInfo;


