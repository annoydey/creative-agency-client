import React, { useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import './Addservice.css'


const Addservice = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const currentform = useRef(null)

    const [file, setFile] = useState(null) 

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const onSubmit = data => {
        currentform.current.reset()
        const service = new FormData()
        service.append('icon',file)
        service.append('title',data.title)
        service.append('description',data.description)

        fetch('https://cryptic-plateau-64962.herokuapp.com/addService',{
            method: 'POST',
            body: service
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
            <div className="col-md-9 servicebg">
                <h5 id="h5service">Add Services</h5>
                    <form ref = {currentform} onSubmit={handleSubmit(onSubmit)}>
                        <label id="fieldtxt">Service Title</label>
                        <label id="icontext">Icon</label>
                        <div>
                            <input id="field_1" name="title" placeholder="Enter Title" ref={register} />
                            {errors.exampleRequired && <span>This field is required</span>}
                            
                            <input onChange={handleFileChange} className="btn btn-outline-success ml-5" id="field_3" type="file" name="filename" placeholder="Enter Title" ref={register} />
                            
                           
                        </div>
                        <label id="fieldtxt">Description</label>
                        <div>
                            <textarea id="field_2" name="description" placeholder="Your Description" ref={register({ required: true })}>
                            </textarea>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <button  className="btn btn-outline-primary" type="submit">Send</button>
                    </form>
            </div> 
        </div>
  
    );
};

export default Addservice;




