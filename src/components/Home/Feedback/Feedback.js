import React, { useEffect, useState } from 'react';
import customer2 from '../../../images/customer-2.png'
import './Feedback.css'


const Feedback = () => {
    const [review, setreview] = useState([]);

    useEffect(() => {
        fetch('https://cryptic-plateau-64962.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setreview(data));
    }, [])

    return (
        <div  className="text-center feedback_container">
            <h1>Clients<span id="greentext"> Feedback</span></h1>
            <br/>
            <div className="d-flex justify-content-center feedback_container">
                {
                    review.map(review => 
                        <div className="col-md-3">
                            <div class="card">
                                <div>
                                    <img style={{width: '25%'}} src={customer2} class="ml-2 mt-2 card-img-top float-left" alt="..."/>
                                    <h5 className="font-weight-bold" style={{paddingTop:'10%'}}>{review.Name}</h5>
                                    <p className="font-weight-bold">{review.Designation}</p>
                                </div>
                                <div class="card-body">
                                    <p class="card-text">{review.Description}</p>
                                </div>
                            </div>
                        </div>    
                        )
                }
                
        





            </div>
        </div>
    );
};

export default Feedback;