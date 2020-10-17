import { Link } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const {userorder, setUserorder} = useContext(UserContext)

    const history = useHistory()
    const handleuserservice = (User_service) => {
        setUserorder(User_service)
        history.push(`/user/${User_service.title}`);
    }

    useEffect(() => {
        fetch('https://cryptic-plateau-64962.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div className="text-center">
            <h1>Provide awesome <span id="greentext"> services </span></h1>
            <br/>
            <div className="mt-4 mb-4 d-flex justify-content-center">
                {
                    services.map(ser => 
                        <div onClick={() => handleuserservice(ser)} className="col-md-2">
                            <div className="card card_s">
                                <img style={{width: '30%'}} className="card-img-top"  src={`data:image/jpeg;base64,${ser.icon.img}`} alt="Card image cap" />
                                <h3 className="font-weight-bold">{ser.title}</h3>
                                <p className="text-secondary">{ser.description}</p>
                            </div>
                        </div>  
                    )
                }
            </div>
        </div>
    );
};

export default Services;