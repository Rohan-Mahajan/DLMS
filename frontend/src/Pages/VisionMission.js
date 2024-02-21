import React from 'react';
import './AboutUs.css'
import { Container } from 'react-bootstrap';

function LearningOutcomes() {
    return (
        <div>
            <Container >
                <div style={{ backgroundColor: '#EDF2F4', fontSize: '1.2rem' }} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="productDetailMiddle" style={{ backgroundColor: '#EDF2F4' }}>
                        <h1 className='vmheadings'>Vision</h1>
                        <p>To nurture and enlighten the budding talents into socially committed & dexterous Computer Science & Engineering professionals, possessing a robust foundation and adaptable attitude for rapid technological advancements in the field along with sustainable ethical values, to meet global challenges.</p>
                    </div>
                    <div className="productDetailMiddle" style={{ backgroundColor: '#EDF2F4' }}>
                        <h1 className='vmheadings'>Mission</h1>
                        <ul>
                            <li>To persistently endeavor for the consistent development of students by providing them a robust foundation in knowledge arena by enabling students to imbibe the very essence and philosophy of Computer Science & Engineering domain.</li><br />
                            <li>To continuously strive for the overall development of students by educating them in blooming cutting edge technology.</li><br />
                            <li>To curate a conducive environment for exploring, analyzing and applying knowledge to improve technical & interpersonal skills of
                                students.
                            </li><br />
                            <li>To inculcate ethics, environmental awareness and societal commitment contributing to their professional personality to serve better for a sustainable global society.</li><br />
                            <li>To provide an exposure of Innovative research culture in the demanding arena of Computer Science & Engineering.</li>
                        </ul>
                    </div>
                    <div className="productDetailMiddle" style={{ backgroundColor: '#EDF2F4' }}>
                        <h1 className='vmheadings'>Program Educational Objectives (PEO’S)</h1>
                        <div style={{ fontSize: '1.2rem' }}>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td style={{width:'100pxx'}}><h3>PE01</h3></td>
                                        <td><p>To attain professional competency in the fast growing area of Computer Science & Engineering.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h3>PE02</h3></td>
                                        <td><p>To be able to apply knowledge of basic sciences and core engineering to pursue higher education, research and also to     be able to work in competitive  multidisciplinary environment.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><h3>PE03</h3></td>
                                        <td><p>To flourish as a socially committed Computer Science & Engineering grandaunts, possessing state of the art domain knowledge, entrepreneurial skill, problem solving & research attitude, good leadership qualities and high ethical values.</p></td>
                                    </tr>
                                    
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default LearningOutcomes;
