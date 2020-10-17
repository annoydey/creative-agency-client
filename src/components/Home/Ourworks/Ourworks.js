import React from 'react';
import { Carousel } from 'react-bootstrap'
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'
import './Ourworks.css'

const Ourworks = () => {
    return (
        <div className="carouseloutline">
            <h1 className="h1carousel pt-5 text-center" style={{color: 'white'}}>Here are some of <span id="greentext"> our works </span></h1>
            <br/>
            <Carousel className="mt-4 carouselhome">
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgs"
                    src={carousel1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgs"
                    src={carousel2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgs"
                    src={carousel3}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgs"
                    src={carousel4}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgs"
                    src={carousel5}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Ourworks;


// #111430 ;