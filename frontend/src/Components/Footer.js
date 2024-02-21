import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import TelegramIcon from '@material-ui/icons/Telegram';
// import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>CSE UIT RGPV</p>
                        <p>Bhopal-462033, (M.P)</p>
                        <p><b>Email:</b>docseuitrgpv@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Usefull Links</h1>
                        <Link to='/books'>
                            <a href="#books">Books</a>
                        </Link>
                        <Link to='/allsubjects'>
                            <a href="#allsubjects">Subjects</a>
                        </Link>
                        <Link to='/signup'>
                            <a href='signup'>SignUp</a>
                        </Link>
                        <Link to='/signin'>
                            <a href='signin'>SignIn</a>
                        </Link>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Satish Soni</p>
                        <p>Education</p>
                        <p>Contact: +91 9584526854</p>
                    </div>
                </div>
                {/* <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div> */}
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'></p>
            </div>
        </div>
    )
}

export default Footer