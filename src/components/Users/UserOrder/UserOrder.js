import React, { useContext, useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import UserSidebar from '../UsersSidebar/UserSidebar';

const UserOrder = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const currentform = useRef(null)

    const {userorder, setUserorder} = useContext(UserContext)

    console.log(userorder)

    const onSubmit = (data) => {

        currentform.current.reset()
        const newData = {...userorder, ...data }

        fetch('https://cryptic-plateau-64962.herokuapp.com/addorder',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newData)
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
                <h5 className="mt-5 mb-5">Order</h5>
                    <form ref = {currentform} onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input id="reviewfield1" name="Name" placeholder="Your name/company's name" ref={register} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <input id="reviewfield1" name="Email" defaultValue={loggedInUser.email} ref={register} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <input id="reviewfield1" name="Title" defaultValue={userorder.title} ref={register} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <textarea id="reviewfield2" name="Details" placeholder="Project Details" ref={register({ required: true })}>
                            </textarea>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <input id="reviewfield1" name="Price" placeholder="Price" ref={register} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <button  className="btn btn-lg btn-dark" type="submit">Send</button>
                    </form>
            </div> 
        </div>
    );
};

export default UserOrder;