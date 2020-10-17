import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import UserSidebar from '../UsersSidebar/UserSidebar';
import './UserServicelist.css'

const UserServicelist = () => {
    const [userorderlist, setUserorderlist] = useState([]);
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);

    useEffect(() => {
        fetch('https://cryptic-plateau-64962.herokuapp.com/userorder?Email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserorderlist(data));
    },[])
    return (
        <div className="row">  
        <div className="col-md-3 ">
        <UserSidebar></UserSidebar>
        </div>
        <div className="col-md-9 usersrvlist">
            <h5 className="mt-5 mb-5">Order List</h5>
            <div className="d-flex">
                {
                    userorderlist.map(od => 
                    <div className="col-md-3">
                        <div class="card">
                            <div>
                                <img style={{width: '25%'}} src={`data:image/jpeg;base64,${od.icon.img}`} class="ml-3 mt-2 card-img-top float-left" alt="..."/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-text">{od.title}</h5>
                                <p>{od.Details}</p>
                            </div>
                        </div>
                    </div>    
                    )
                }
            </div>
        </div> 
    </div>
    );
};

export default UserServicelist;