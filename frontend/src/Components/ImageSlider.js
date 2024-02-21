import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="/Images/photo1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>CSE Departmental Library</h3>
                        <p>A vast ocean of knowledge</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="/Images/photo2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>CSE Departmental Library</h3>
                        <p>A vast ocean of knowledge</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Images/photo3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>CSE Departmental Library</h3>
                        <p>A vast ocean of knowledge</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
