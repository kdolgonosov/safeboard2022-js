import './GroupView.css';
import SortBar from '../SortBar/SortBar';
import useSortableData from '../../hooks/useSortableData';
import GroupViewList from '../GroupViewList/GroupViewList';
import GroupViewListItem from '../GroupViewListItem/GroupViewListItem';

const GroupView = ({ users }) => {
    const { sortedItems, sortData, sortConfig } = useSortableData(users);
    const groupByDepartment = sortedItems.reduce((acc, user) => {
        const { department } = user;
        acc[department] = acc[department] ?? [];
        acc[department].push(user);
        return acc;
    }, {});

    return (
        <>
            <SortBar sortData={sortData} sortConfig={sortConfig} />
            <div className='groupView'>
                {Object.keys(groupByDepartment).map((department, index) => (
                    <GroupViewList key={index} title={department}>
                        {groupByDepartment[department].map((user) => (
                            <GroupViewListItem
                                key={user.id}
                                name={user.name}
                                position={user.position}
                            />
                        ))}
                    </GroupViewList>
                ))}
            </div>
        </>
    );
};

export default GroupView;
