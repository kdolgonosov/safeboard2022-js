import React from 'react';
import './GroupViewList.css';

const GroupViewList = ({ title, children }) => {
    return (
        <div className='groupViewList'>
            <h2 className='groupViewList__title'>{title}</h2>
            {children}
        </div>
    );
};

export default GroupViewList;
