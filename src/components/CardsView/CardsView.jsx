import './CardsView.css';
import SortBar from '../SortBar/SortBar';
import CardsViewItem from '../CardsViewItem/CardsViewItem';
import useSortableData from '../../hooks/useSortableData';

const CardsView = ({ users, handleSort }) => {
    const { sortedItems, sortData, sortConfig } = useSortableData(users);

    return (
        <>
            <SortBar sortData={sortData} sortConfig={sortConfig} />
            <div className='cardsView'>
                {sortedItems.map((user) => (
                    <CardsViewItem
                        key={user.id}
                        name={user.name}
                        department={user.department}
                        phone={user.phone}
                    />
                ))}
            </div>
        </>
    );
};

export default CardsView;
