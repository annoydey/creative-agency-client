import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt ,faHdd ,faPlusSquare, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    return (
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{height:"100vh"}}>

            <ul className="list-unstyled">
                <img className="logo" src={logo}></img>
                <li className="sidebartext">
                    <Link to="/admin" className="text-dark">
                        <FontAwesomeIcon icon={faHdd} /> <span>Service list</span> 
                    </Link>
                </li>
                <li className="sidebar_margin">
                    <Link to="/addservice" className="text-dark">
                        <FontAwesomeIcon icon={faPlusSquare} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li className="sidebar_margin">
                    <Link to="/makeadmin" className="text-dark">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            </ul>
            <div className="sidebar_margin">
                <Link to="/home" className="text-dark" onClick={() => setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;