import React from 'react';
import './Footer.css'
import { useForm } from "react-hook-form";

const Footer = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="footer-container">
            <section className="row d-flex">  
                <div className="col-md-5 offset-md-1 footertext">
                    <h1 className="font-weight-bold footermaintxt">Let us handle your <br/> project,professionally.</h1>
                    <br/>
                    <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor .</p>
                    {/* <button type="button" className="btn btn-dark btn-lg hireusbtn" href="#">Hire Us</button> */}
                </div>
                <div className="col-md-5">
                    <div className="form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input id="field1" name="email" placeholder="Your email address" ref={register} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div>
                                <input id="field1" name="name" placeholder="Your name / company's name" ref={register({ required: true })} />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <div>
                                <textarea id="field2" name="message" placeholder="Your Message" ref={register({ required: true })}>
                                </textarea>
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <button  className="mt-4 btn btn-dark btn-lg " type="submit">Send</button>
                        </form>
                    </div>
                </div>  
            </section>
        </div>
    );
};

export default Footer;