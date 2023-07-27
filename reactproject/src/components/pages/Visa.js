import React from 'react';
import CardItem from '../CardItem';
import '../../App.css';
import '../Cards.css'; 
import Footer from '../Footer';

export default function Visa() {
  return (
    <>
    <div className='visa'>
      <h1>Visa Services</h1>
      <div className='cards'>
        <h1>Explore the world with our visa service!</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/argentina.png'
                text='Visit Argentina'
                label='Discount'
                path='/visa'
              />
              <CardItem
                src='images/aus.jpg'
                text='Visit Australia'
                label='Discount'
                path='/visa'
              />
              <CardItem
                src='images/canada.png'
                text='Visit Canada'
                label='Discount'
                path='/visa'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/denmark.jpg'
                text='Visit Denmark' 
                label='Discount'              
                path='/visa'
              />
              <CardItem
                src='images/eng.jpg'
                text='Visit England'
                label='Discount'
                path='/visa'
              />
              <CardItem
                src='images/usa.png'
                text='Visit United States of America'
                label='Discount'               
                path='/visa'
              />
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
