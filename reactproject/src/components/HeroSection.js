import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import bgImage from '../video/video-1.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video autoPlay loop muted>
          <source src={bgImage} type='video/mp4'/>
      </video>
      <p>Best Travel Agency in Bangladesh!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;