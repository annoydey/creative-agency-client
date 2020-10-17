import React, {useRef} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Makeadmin.css'

const Makeadmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const currentform = useRef(null)

    const onSubmit = data => {
        currentform.current.reset()
        fetch('https://cryptic-plateau-64962.herokuapp.com/makeadmin',{
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
        <Sidebar></Sidebar>  
        </div>
        <div className="col-md-9 makeadminbg">
            <h5 id="h5service">Admin Change</h5>
                <form ref = {currentform} onSubmit={handleSubmit(onSubmit)}>
                    <label id="fieldtxt">Email</label>
                    <div>
                        <input id="field_1" name="email" placeholder="Make Admin" ref={register} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <button  className="btn btn-lg btn-outline-success submitemailbtn" type="submit">Send</button>
                    </div>
                </form>
        </div> 
    </div>
    );
};

export default Makeadmin;