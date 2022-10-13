import React from 'react';
import './CardsViewItem.css';

const CardsViewItem = ({ name, department, phone }) => {
    return (
        <div className='cardsViewItem'>
            <p className='cardsViewItem__name'>{name}</p>
            <div className='cardsViewItem__photo'></div>
            <p className='cardsViewItem__department'>{department}</p>
            <p className='cardsViewItem__phone'>{phone}</p>
        </div>
    );
};

export default CardsViewItem;
