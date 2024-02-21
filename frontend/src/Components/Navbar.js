import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
    
  return (
    <Navbar expand="lg" className="bg-body-tertiary backColor" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto"> {/* Use 'mx-auto' to center the content */}
            <Nav.Link href="/" className="navbar-link" >Home</Nav.Link>
            <Nav.Link href="/aboutus" className="navbar-link" >About Us</Nav.Link>
            <Nav.Link href="/visionmission" className="navbar-link" >Vision & Mission</Nav.Link>
            <Nav.Link href="/learnings" className="navbar-link" >Learning Outcomes</Nav.Link>
            <Nav.Link href="/books" className="navbar-link">Books</Nav.Link>
            <Nav.Link href="/ejournals" className="navbar-link">e-Material</Nav.Link>
            <Nav.Link href="/allsubjects" className="navbar-link">Subjects</Nav.Link>
            <Nav.Link href="/facultydetails" className="navbar-link">Faculty Details</Nav.Link>
            <Nav.Link href="/signup" className="navbar-link">Register</Nav.Link>
            <Nav.Link href="/signin" className="navbar-link">LogIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;



// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function Navbar() {
//   return (
//     <div>
//       <div className="menu_control">
//                 <div className="stellarnav dark right desktop"><a href="google.com" className="menu-toggle"><span className="bars"><span></span><span></span><span></span></span> Menu</a>
//                     <ul><a href="google.com" className="close-menu full"><span className="icon-close"></span>Close</a>
//                         <li><a href="index.aspx">Home</a></li>
//                         <li className="drop-right has-sub">
//                             <a href="#Home_About">About Us</a>
//                         </li>
//                         </ul>
//                 </div>
//                 {/* <!-- .stellarnav --> */}
//             </div>
//     </div>
//   );
// }

// export default Navbar;
