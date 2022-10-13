import { useState, useEffect } from 'react';
import './Users.css';
import useDebounce from '../../hooks/useDebounce';
import api from '../../utils/Api';
import TableView from '../TableView/TableView';
import CardsView from '../CardsView/CardsView';
import GroupView from '../GroupView/GroupView';

const Users = () => {
    const [selectedView, setSelectedView] = useState('table');
    const [selectedSearchField, setSelectedSearchField] = useState('name');
    const [searchFormValue, setSearchFormValue] = useState('');
    const [cachedUsers, setCachedUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const localUsers = JSON.parse(localStorage.getItem('cachedUsers'));
        setCachedUsers(localUsers);
        setFilteredUsers(localUsers);
        if (localUsers === null || localUsers.length === 0) {
            api.getUsers().then((res) => {
                setCachedUsers(res);
                setFilteredUsers(res);
                localStorage.setItem('cachedUsers', JSON.stringify(res));
            });
        }
    }, []);
    const search = (value) => {
        setFilteredUsers(
            cachedUsers.filter((user) =>
                user[`${selectedSearchField}`].toLowerCase().includes(value.toLowerCase()),
            ),
        );
    };
    const debouncedSearch = useDebounce(search, 800);
    const handleSearchFormChange = (e) => {
        setSearchFormValue(e.target.value);
        debouncedSearch(e.target.value);
    };
    const handleSelectChange = (e) => {
        setSelectedSearchField(e.target.value);
    };

    return (
        <div className='users'>
            <div className='users__header'>
                <input
                    type='text'
                    className='users__searchform'
                    onChange={handleSearchFormChange}
                    value={searchFormValue}
                    placeholder={`Поиск по полю "${selectedSearchField}"`}
                ></input>
                <label className='users__selectform_label'>
                    Выбрать поле для поиска:&nbsp;
                    <select
                        type='select'
                        value={selectedSearchField}
                        onChange={handleSelectChange}
                        className='users__selectform'
                    >
                        <option value='name'>Полное имя</option>
                        <option value='email'>Электронная почта</option>
                        <option value='department'>Группа</option>
                        <option value='phone'>Номер телефона</option>
                    </select>
                </label>
                <ul className='users__navbar'>
                    <li className='users__navbar-item'>
                        <button
                            className={`users__navbar-btn ${
                                selectedView === 'table' && `users__navbar-btn_type_active`
                            }`}
                            onClick={() => setSelectedView('table')}
                        >
                            Таблица
                        </button>
                    </li>
                    <li>
                        <button
                            className={`users__navbar-btn ${
                                selectedView === 'cards' && `users__navbar-btn_type_active`
                            }`}
                            onClick={() => setSelectedView('cards')}
                        >
                            Карточки
                        </button>
                    </li>
                    <li>
                        <button
                            className={`users__navbar-btn ${
                                selectedView === 'groups' && `users__navbar-btn_type_active`
                            }`}
                            onClick={() => setSelectedView('groups')}
                        >
                            Группы
                        </button>
                    </li>
                </ul>
            </div>
            <div className='users__layout'>
                {filteredUsers === null || filteredUsers.length === 0 ? (
                    <h1>Ничего не найдено</h1>
                ) : selectedView === 'table' ? (
                    <TableView users={filteredUsers} />
                ) : selectedView === 'cards' ? (
                    <CardsView users={filteredUsers} />
                ) : (
                    <GroupView users={filteredUsers} />
                )}
            </div>
        </div>
    );
};

export default Users;
