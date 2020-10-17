import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './Companylogo.css'

const Companylogo = () => {
    return (
        <div className="row d-flex justify-content-center companylogo">
            <div className="col-md-2">
                <div>
                    <img style={{width: '50%'}} src={slack}/>
                </div>
            </div>
            <div className="col-md-2">
                <div>
                    <img style={{width: '50%'}} src={google}/>
                </div>
            </div>
            <div className="col-md-2">
                <div>
                    <img style={{width: '50%'},{height:'50px'}} src={uber}/>
                </div>
            </div>
            <div className="col-md-2">
                <div>
                    <img style={{width: '50%'}, {height:'60px'}} src={netflix}/>
                </div>
            </div>
            <div className="col-md-2">
                <div>
                    <img style={{width: '50%'}} src={airbnb}/>
                </div>
            </div>   
        </div>
    );
};

export default Companylogo;