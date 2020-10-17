import React, {useRef} from 'react';
import { useForm } from "react-hook-form";
import UserSidebar from '../UsersSidebar/UserSidebar';
import './UserReview.css'

const UserReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const currentform = useRef(null)

    const onSubmit = data => {
        currentform.current.reset()
        fetch('https://cryptic-plateau-64962.herokuapp.com/addreview',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })

    };
    return (
        <div className="row">  
            <div className="col-md-3 ">
            <UserSidebar></UserSidebar>
            </div>
            <div className="col-md-9 reviewbgcolor">
                <div className="row d-flex justify-content-between">
                    <h5 className="mt-5 pl-3">Review</h5>
                    <h5 className="mt-5 mr-5">Review</h5>
                </div>
                <div className="mt-4">
                    <form ref = {currentform} onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input id="reviewfield1" name="Name" placeholder="Your name" ref={register} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div>
                                <input id="reviewfield1" name="Designation" placeholder="Company's name Designation" ref={register} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div>
                                <textarea id="reviewfield2" name="Description" placeholder="Description" ref={register({ required: true })}>
                                </textarea>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <button  className="btn btn-lg btn-dark" type="submit">Submit</button>
                        </form>
                </div>
            </div> 
    </div>
    );
};

export default UserReview;