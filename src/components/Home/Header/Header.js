import React from 'react';
import Companylogo from '../Companylogo/Companylogo';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Ourworks from '../Ourworks/Ourworks';
import Services from '../Services/Services';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Companylogo></Companylogo>
            <Services></Services>
            <Ourworks></Ourworks>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Header;