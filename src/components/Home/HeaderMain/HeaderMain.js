import React from 'react';
import headerimg from '../../../images/logos/Frame.png'
import { Link } from 'react-router-dom';
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <main style={{height: '650px'}} className="row d-flex align-items-end">  
            <div className="col-md-5 offset-md-1 headertext">
                <h1 className="font-weight-bold headermaintxt">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <br/>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor ut labore <br/> et dolore neque gravida et sollicitudin.</p>
                <br/>
                <Link to="/user" type="button" className="btn btn-dark btn-lg hireusbtn" href="#">Hire Us</Link>
            </div>
            <div className="col-md-6">
                <img src={headerimg} alt="" className="img-fluid headerimage"/>
            </div>  
        </main>
    );
};

export default HeaderMain;