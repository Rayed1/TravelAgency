import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Our Services</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem
                    src='images/flag.jpg'
                    text='Visa Services'
                    path='/visa'
                    />
                    <CardItem
                    src='images/img-9.jpg'
                    text='Tour Packages'
                    path='/packages'
                    />

                </ul>
            
            </div>
        </div>
    </div>
  )
}

export default Cards
