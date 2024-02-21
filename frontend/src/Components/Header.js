import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
// import SearchInput from './SearchInput';


function Header() {

    const [menutoggle, setMenutoggle] = useState(false)

    const Toggle = () => {
        setMenutoggle(!menutoggle)
    }

    const closeMenu = () => {
        setMenutoggle(false)
    }

    return (
        <div className="header">
            <div className="logo-nav">
                {/* <Link to='/'>
                    <a href="#home">LIBRARY</a>
                </Link> */}
                {/* Logo on the left */}
                <a className="navbar-brand" href="https://www.uitrgpv.ac.in/">
                    <img src="/Images/RGPVLOGO.jpg" style={{ width: "60px", height: "60px", backgroundColor: '#000', borderRadius: '100px', marginRight: '10px', marginLeft: '25px' }} alt="RGPV_LOGO"></img>
                </a>
                <div style={{ marginTop: '16px' }}>
                    <h3>University Institute of Technology RGPV </h3>
                </div>
            </div>
            <div className='nav-right'>
                {/* <input className='search-input' type='text' placeholder='Search a Book'/> */}
                {/* <SearchInput/> */}
                <ul className={menutoggle ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/'>
                            <a href="#home">Home</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/books'>
                            <a href="#books">Books</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/allsubjects'>
                            <a href="#allsubjects">Subjects</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signup'>
                            <a href='signup'>Register</a>
                        </Link>
                    </li>
                    <li className="option" onClick={() => { closeMenu() }}>
                        <Link to='/signin'>
                            <a href='signin'>LogIn</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mobile-menu" onClick={() => { Toggle() }}>
                {menutoggle ? (
                    <ClearIcon className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <MenuIcon className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
    )
}

export default Header
