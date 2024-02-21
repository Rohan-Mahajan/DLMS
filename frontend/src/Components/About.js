import React from 'react'
import './About.css'
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="/Images/bookAbout.jpg" alt="" />
                </div>
                <div>
                    {/* <h3 className="about-UIT">University Institute of Technology Rajiv Gandhi Proudyogiki Vishwavidyalay</h3> */}
                    <Container className="mt-5">
                        <Row>
                            <Col>
                                <h2 className="text-center headingTextColor">Dept. of Computer Science & Technology University Institute of Technology<br/>Rajiv Gandhi Proudyogiki Vishwavidyalay</h2>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p className="text-center paraTextColor">
                                UIT-RGPV, Bhopal is a community of teachers, staff & students, who are dedicated to the achievement of a shared vision of excellence. The community believes in renewing and transferring knowledge & skills and the development of positive & purposeful attitudes and values. Being in the campus of the State Technological University, the UIT-RGPV is in a position to offer excellent and high quality academic services to the students.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default About
