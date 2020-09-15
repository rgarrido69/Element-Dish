import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Virtual Restaurant</h1>
            <p>We make daily dishes fresh</p>
            <h2>Check back every Monday for different specials</h2>
            <br></br>
            <div>
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                
            </div>
        </div>
    )
}

export default HeroSection
