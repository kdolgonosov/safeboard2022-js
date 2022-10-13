import './TableView.css';
import useSortableData from '../../hooks/useSortableData';
const TableView = ({ users }) => {
    const { sortedItems, sortData, sortConfig } = useSortableData(users);
    return (
        <table className='tableView'>
            <thead className='tableView__thead'>
                <tr className='tableView__tr'>
                    <th
                        className={`tableView__th ${
                            sortConfig.field === 'name' &&
                            (sortConfig.direction === 'ascending'
                                ? 'tableView__th_type_asc'
                                : 'tableView__th_type_desc')
                        }`}
                    >
                        <button
                            className='tableView__btn'
                            type='button'
                            onClick={() => sortData('name')}
                        >
                            Полное имя
                        </button>
                    </th>
                    <th
                        className={`tableView__th ${
                            sortConfig.field === 'email' &&
                            (sortConfig.direction === 'ascending'
                                ? 'tableView__th_type_asc'
                                : 'tableView__th_type_desc')
                        }`}
                    >
                        <button
                            className='tableView__btn'
                            type='button'
                            onClick={() => sortData('email')}
                        >
                            Электронная почта
                        </button>
                    </th>
                    <th
                        className={`tableView__th ${
                            sortConfig.field === 'department' &&
                            (sortConfig.direction === 'ascending'
                                ? 'tableView__th_type_asc'
                                : 'tableView__th_type_desc')
                        }`}
                    >
                        <button
                            className='tableView__btn'
                            type='button'
                            onClick={() => sortData('department')}
                        >
                            Группа
                        </button>
                    </th>
                    <th
                        className={`tableView__th ${
                            sortConfig.field === 'phone' &&
                            (sortConfig.direction === 'ascending'
                                ? 'tableView__th_type_asc'
                                : 'tableView__th_type_desc')
                        }`}
                    >
                        <button
                            className='tableView__btn'
                            type='button'
                            onClick={() => sortData('phone')}
                        >
                            Номер телефона
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody className='tableView__tbody'>
                {sortedItems.map((user) => (
                    <tr className='tableView__tr' key={user.id}>
                        <td className='tableView__td'>{user.name}</td>
                        <td className='tableView__td'>{user.email}</td>
                        <td className='tableView__td'>{user.department}</td>
                        <td className='tableView__td'>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableView;
