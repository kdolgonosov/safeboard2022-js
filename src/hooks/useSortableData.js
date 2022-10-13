import { useState, useMemo } from 'react';

const useSortableData = (items) => {
    const [sortConfig, setSortConfig] = useState({
        field: null,
        direction: null,
    });
    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        sortableItems.sort((a, b) => {
            if (a[sortConfig.field] < b[sortConfig.field]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.field] > b[sortConfig.field]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        return sortableItems;
    }, [items, sortConfig]);

    const sortData = (field) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.field === field && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ field, direction });
    };

    return { sortedItems, sortData, sortConfig };
};

export default useSortableData;
