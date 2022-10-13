import React from 'react';
import './GroupViewListItem.css';

const GroupViewListItem = ({ name, position }) => {
    return (
        <div className='groupViewListItem'>
            <p className='groupViewListItem__name'>{name}</p>
            <p className='groupViewListItem__position'>{position}</p>
        </div>
    );
};

export default GroupViewListItem;
