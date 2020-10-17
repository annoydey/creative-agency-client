import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [service_list,setService_list] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-plateau-64962.herokuapp.com/allservicelist')
        .then(res => res.json())
        .then(data => setService_list(data));
    },[])
    return (
  
        <div className="row">  
            <div className="col-md-3 ">
              <Sidebar></Sidebar>  
            </div>
            <div className="col-md-8 listbg">
                <h5 id="h5service">Service List</h5>
                <table className="mt-4 table table-borderless listbox">
                    <thead>
                        <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        service_list.map(allorder => 
                                
                            <tr>
                                <td>{allorder.Name}</td>
                                <td>{allorder.Email}</td>
                                <td>{allorder.Title}</td>
                                <td>{allorder.Details}</td>
                                <td>
                                    <div class="dropdown">
                                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pending
                                        </button>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" >Pending</a>
                                            <a class="dropdown-item" >Done</a>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>  
        </div>
      
    );
};

export default AdminDashboard;