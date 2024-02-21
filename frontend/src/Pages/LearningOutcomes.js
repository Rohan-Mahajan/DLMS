import React from 'react';
import './AboutUs.css'
import { Container } from 'react-bootstrap';

function LearningOutcomes() {
    return (
        <div>
            <Container >
                <div style={{ backgroundColor: '#EDF2F4', fontSize: '1.2rem' }} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="productDetailMiddle" style={{ backgroundColor: '#EDF2F4' }}>
                        <h1 style={{ textAlign: 'center' }}>Program Outcomes (PO'S)</h1>
                        {/* <h2 style={{color:'#EF233C'}}>Program Outcomes (PO'S)</h2> */}
                        <br />
                        <ul>
                            <li><strong>Engineering knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.</li>
                            <br />
                            <li><strong>Problem analysis:</strong> Identify, formulate, review research literature and analyze complex engineering problems, reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.</li>
                            <br />
                            <li><strong>Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety and the cultural, societal and environmental considerations.</li>
                            <br />
                            <li><strong>Conduct investigations of complex problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions</li>
                            <br />
                            <li><strong>Modern tool usage:  </strong> Create, select and apply appropriate techniques, resources and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.</li>
                            <br />
                            <li><strong>The engineer and society:</strong> Apply reasoning informed by contextual knowledge to assess societal,health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice. </li>
                            <br />
                            <li><strong>Environment and sustainability:</strong> Understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate the knowledge of and need for sustainable development.
                            </li>
                            <br />
                            <li><strong>Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.</li>
                            <br />
                            <li><strong>Individual and team work: </strong>Function effectively as an individual and as a member or leader in diverse teams and in multidisciplinary settings.
                            </li>
                            <br />
                            <li><strong>Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations and give and receive clear instructions.</li>
                            <br />
                            <li><strong>Project management and finance:</strong> Demonstrate knowledge and understanding of engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
                            <br />
                            <li><strong>Life-long learning:</strong> Recognize the need for and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
                        </ul>
                        <br />
                        <h1 style={{ textAlign: 'center', marginBottom:'20px' }}>Program Specific Outcomes (PSO'S)</h1>
                        <ul>
                            <li><strong>PSO1: Professional Skills-</strong>The ability to understand, analyze and developcomputerprograms in the areas related to algorithms, system software, multimedia, web design, network security, IoT and networking for efficient design of computer-based systems ofvarying.</li>
                            <br />
                            <li><strong>PSO2: Problem-Solving Skills-</strong> The ability to apply standard practices and strategiesin software project development using open-ended programming environments todeliver a quality product for business success.</li>
                            <br />
                            <li><strong>PSO3: Successful Career and Entrepreneurship-</strong> The ability to employ modern computer languages, environments, and platforms in creating innovative career pathsto be an entrepreneur, and a zest for higher studies.</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default LearningOutcomes;
