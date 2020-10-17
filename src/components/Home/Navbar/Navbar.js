import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Button className="navbar-toggler btn-primary" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </Button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <img className="logo" src={logo}></img>
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link mr-5" href="/home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="">Our Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="">Our Team</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="">Contact Us</a>
                </li>
                <li className="nav-item">
                    <Link to="/admin" type="button" className="btn btn-dark mr-5 loginbtn" href="#">Login</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;