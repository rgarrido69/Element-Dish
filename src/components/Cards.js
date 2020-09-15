import React from 'react';
import CardItems from './CardItems';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these delicious dishes!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItems
                            src='img/pizza2.jpeg'
                            text='By far the best pizza this side of Italy'
                            label='Delizioso'
                            path='/services'
                        />
                        <CardItems
                            src='img/sandwich.jpeg'
                            text='Explosion of taste'
                            label='Dig right in'
                            path='/services'
                        />
                        <CardItems
                            src='img/sandwich.jpeg'
                            text='Explosion of taste'
                            label='Dig right in'
                            path='/services'
                        />
                        <CardItems
                            src='img/sandwich.jpeg'
                            text='Explosion of taste'
                            label='Dig right in'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                            src='img/burger.jpeg'
                            text='Delicious and Juicy'
                            label='Big mouth bite'
                            path='/services'
                        />
                        <CardItems
                            src='img/ribs.png'
                            text='Falling off the bone ribs'
                            label='Texas Style'
                            path='/services'
                        />
                        <CardItems
                            src='img/ribs.png'
                            text='Falling off the bone ribs'
                            label='Texas Style'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
