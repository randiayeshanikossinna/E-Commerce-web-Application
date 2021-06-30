import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/th-removebg-preview (2).png';



export const Navbar = () => {
    return (
        <div className="navbox">
            <div className="leftside">
                <img src={logo} alt=""/>
            </div>
            <div className="rightside">
                <Link to="/signup" className="navlinks">SIGN UP</Link>
                <Link to="/login" className="navlinks">LOGIN</Link>
            </div>
        </div>
    )
}
