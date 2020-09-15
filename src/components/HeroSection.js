import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Virtual Restaurant</h1>
            <p>Freshness Delivered</p>
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
