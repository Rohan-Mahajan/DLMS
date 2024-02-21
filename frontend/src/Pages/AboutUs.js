import React from 'react';
import './AboutUs.css'
import { Container } from 'react-bootstrap';

function AboutUs() {
    return (
        <div>
            <Container >
                <div style={{backgroundColor:'#EDF2F4', fontSize:'1.2rem'}} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="productDetailMiddle" style={{backgroundColor:'#EDF2F4'}}>
                        <h1>Departmental Library</h1>
                        <p><strong>Departmental Library:&nbsp;</strong></p>
                        <p>In addition to central Library, a well equipped departmental library is functioning in the department catering to the needs of faculty and students with a seating capacity of 30 . Departmental library is equipped with 720+ books which cover the syllabus of Undergraduate course in Information Technology as well as competitive examinations such as&nbsp; GATE.</p>
                        <p>The objective of departmental library is to promote the use of reference books among the students. All the students in the department and faculty utilize the books in the library for their study.</p>
                        <p><strong>Services &amp; Facility:</strong></p>
                        <ul>
                            <li>Issue of books:
                                <ul>
                                    <ul>
                                        <li>SE to BE: 3 books for 15 days</li>
                                        <li>Class Toppers: 2 additional books for one semester&nbsp;</li>
                                    </ul>
                                </ul>
                            </li>
                            <li>E-Journals also available from various publishers, related to Computer Science & Engineering</li>
                            <li>Student B.Tech. project reports available for reference</li>
                            <li>Student M.E./B.Tech. project reports available for reference</li>
                            <li>Spacious Reading area available in departmental library</li>
                            <li>Wi-fi Facility</li>
                        </ul>
                        <p><strong>Collection:&nbsp;</strong></p>
                        <div className="table-responsive"><table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Sr. No</p>
                                    </td>
                                    <td>
                                        <p>Particulars</p>
                                    </td>
                                    <td>
                                        <p>Numbers</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>1.</p>
                                    </td>
                                    <td>
                                        <p>Books</p>
                                    </td>
                                    <td>
                                        <p>726</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>2.</p>
                                    </td>
                                    <td>
                                        <p>e-Journals</p>
                                    </td>
                                    <td>
                                        <p>58</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table></div>
                        {/* <p>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p><strong>Sr. No.</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Particulars</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Numbers</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>1</p>
                                        </td>
                                        <td>
                                            <p>Title</p>
                                        </td>
                                        <td>
                                            <p>286</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>2</p>
                                        </td>
                                        <td>
                                            <p>Volume</p>
                                        </td>
                                        <td>
                                            <p>364</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table></p> */}
                        <p><strong>Library Timing: Daily : 10:00 am to 5:30 pm</strong></p>
                        <p><strong>Library Committee:</strong></p>
                        <div className="table-responsive"><table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Sr. No</p>
                                    </td>
                                    <td>
                                        <p>Name</p>
                                    </td>
                                    <td>
                                        <p>Designation</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>1.</p>
                                    </td>
                                    <td>
                                        <p>Dr. Raju Barskar</p>
                                    </td>
                                    <td>
                                        <p>Coordinator</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>2.</p>
                                    </td>
                                    <td>
                                        <p>Mr. Satish Soni</p>
                                    </td>
                                    <td>
                                        <p>Co-Coordinator</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table></div>                </div>
                </div>
            </Container>
        </div>
    );
}

export default AboutUs;
