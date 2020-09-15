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
                            text='Brick over Margerita Pizza'
                            label='Delizioso'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/sandwich.jpeg'
                            text='Shrimp Po boy'
                            label='Dig right in'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/chicken-fingers.jpeg'
                            text='Free range fried chicken'
                            label='Finger licking good'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/gyro.jpeg'
                            text='Greek Gyro delight'
                            label='Freshness guaranteed'
                            path='/sign-up'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItems
                            src='img/burger.jpeg'
                            text='Delicious and Juicy 1/4 lb cheese burger'
                            label='Big mouth bite'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/ribs.png'
                            text='Falling off the bone ribs'
                            label='Texas Style'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/sandwich2.jpeg'
                            text='Ham and Cheese'
                            label='Deli fresh'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/italian.jpg'
                            text='Spaghetti and meat balls'
                            label='Handmade pasta'
                            path='/sign-up'
                        />
                    </ul>
                    <h1>Drinks</h1>
                    <br></br>
                    <ul className='cards__items'>
                        <CardItems
                            src='img/soda.jpg'
                            text='Coke Products'
                            label='Refreshing'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/martini.jpg'
                            text='Flaming Martini'
                            label='21 and up'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/beer.jpg'
                            text='All the top domestic beers'
                            label='Very cold'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/shakes.jpg'
                            text='Raspberry Vanilla Shake'
                            label='Made fresh'
                            path='/sign-up'
                        />
                    </ul>
                    <h1>A LaCart Dishes</h1>
                    <br></br>
                    <ul className='cards__items'>
                        <CardItems
                            src='img/rolls.jpg'
                            text='Perfect rolls'
                            label='Made daily'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/slidders.jpg'
                            text='Perfect for one'
                            label='100% Beef'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/fries.jpeg'
                            text='Dip it in your shake'
                            label='French Fries'
                            path='/sign-up'
                        />
                        <CardItems
                            src='img/salad.jpg'
                            text='Spring Salad'
                            label='Only the best'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
