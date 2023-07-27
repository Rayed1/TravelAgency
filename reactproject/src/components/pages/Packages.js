import React from 'react';
import CardItem from '../CardItem';
import '../Cards.css'; 
import './Packages.css';
import Footer from '../Footer';
export default function Packages() {
  return (
    <>
    <div className='packages'>
      <h1>PACKAGES</h1>
      <div className='cards'>
        <h2>Check out our Epic Packages for Tour!</h2>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/sajek.jpg'
                text='Book Tickets for Sajak Valley'
                label='2 night & 1 day'
                path='/packages'
              />
              <CardItem
                src='images/cox.jpg'
                text="Book Tickets for Cox's Bazar"
                label='3 night & 1 day'
                path='/packages'
              />
              <CardItem
                src='images/srimangal.jpg'
                text='Book Tickets for Srimangal'
                label='1 night & 1 day'
                path='/packages'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/st.jpg'
                text='Book Tickets for St. Martin'
                label='2 night & 1 day'
                path='/packages'
              />
              <CardItem
                src='images/jaflong.jpg'
                text='Book Tickets for Jaflong'
                label='1 night & 1 day'
                path='/packages'
              />
              <CardItem
                src='images/sundarbans.jpg'
                text='Book Tickets for Sundarbans'
                label='1 night & 1 day'
                path='/packages'
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
