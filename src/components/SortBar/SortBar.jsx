import React from 'react';
import './SortBar.css';

const SortBar = ({ sortData, sortConfig }) => {
    return (
        <ul className='sortBar'>
            <li className='sortBar__item'>
                <button
                    className={`sortBar__button ${
                        sortConfig.field === 'name' &&
                        (sortConfig.direction === 'ascending'
                            ? 'sortBar__button_type_asc'
                            : 'sortBar__button_type_desc')
                    }`}
                    onClick={() => sortData('name')}
                >
                    Полное имя
                </button>
            </li>
            <li className='sortBar__item'>
                <button
                    className={`sortBar__button ${
                        sortConfig.field === 'email' &&
                        (sortConfig.direction === 'ascending'
                            ? 'sortBar__button_type_asc'
                            : 'sortBar__button_type_desc')
                    }`}
                    onClick={() => sortData('email')}
                >
                    Электронная почта
                </button>
            </li>
            <li className='sortBar__item'>
                <button
                    className={`sortBar__button ${
                        sortConfig.field === 'department' &&
                        (sortConfig.direction === 'ascending'
                            ? 'sortBar__button_type_asc'
                            : 'sortBar__button_type_desc')
                    }`}
                    onClick={() => sortData('department')}
                >
                    Группа
                </button>
            </li>
            <li className='sortBar__item'>
                <button
                    className={`sortBar__button ${
                        sortConfig.field === 'phone' &&
                        (sortConfig.direction === 'ascending'
                            ? 'sortBar__button_type_asc'
                            : 'sortBar__button_type_desc')
                    }`}
                    onClick={() => sortData('phone')}
                >
                    Номер телефона
                </button>
            </li>
        </ul>
    );
};

export default SortBar;
