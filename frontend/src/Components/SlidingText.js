import React from 'react';
import './SlidingText.css';
import Marquee from 'react-fast-marquee';

function SlidingText() {
    return (
        <div className='textSlider'>
            <Marquee speed={70} gradient={false} >
                <div className="slider-text-display">
                    Welcome to Computer Science & Engineering Depertmental Library
                </div>
            </Marquee>
        </div>
    );
}

export default SlidingText;