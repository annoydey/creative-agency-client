import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt ,faHdd ,faShoppingBasket, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './UsersSidebar.css'
import logo from '../../../images/logos/logo.png'
import { UserContext } from '../../../App';

const UserSidebar = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    return (
        <div className="usersidebar d-flex flex-column justify-content-between  py-5 px-4" style={{height:"100vh"}}>

            <ul className="list-unstyled">
                <img className="logo" src={logo}></img>
                <li className="usersidebartext">
                    <Link to="/user" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Order</span> 
                    </Link>
                </li>
                <li className="usersidebar_margin">
                    <Link to="/orderlist" className="text-dark">
                        <FontAwesomeIcon icon={faHdd} /> <span>Order list</span> 
                    </Link>
                </li>
                <li className="usersidebar_margin">
                    <Link to="/review" className="text-dark">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div className="usersidebar_margin">
                <Link to="/home" className="text-dark" onClick={() => setLoggedInUser({})} ><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default UserSidebar;