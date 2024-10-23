// App.js
import React, { useState, useEffect } from 'react';
import Board from './components/Board.jsx';
import Header from './components/Header.jsx';
import {data} from './components/data.jsx';
import './App.css';

function App() {
    const [tickets, setTickets] = useState([]);
    const [grouping, setGrouping] = useState('status');
    const [sortOrder, setSortOrder] = useState('priority');

    useEffect(() => {
        setTickets(data.tickets);
        const savedGrouping = localStorage.getItem('kanbanGrouping');
        const savedSortOrder = localStorage.getItem('kanbanSortOrder');
        if (savedGrouping) setGrouping(savedGrouping);
        if (savedSortOrder) setSortOrder(savedSortOrder);
    }, []);

    const handleGroupingChange = (newGrouping) => {
        setGrouping(newGrouping);
        localStorage.setItem('kanbanGrouping', newGrouping);
    };

    const handleSortOrderChange = (newSortOrder) => {
        setSortOrder(newSortOrder);
        localStorage.setItem('kanbanSortOrder', newSortOrder);
    };

    return (
        <div className="App">
            <Header
                grouping={grouping}
                sortOrder={sortOrder}
                onGroupingChange={handleGroupingChange}
                onSortOrderChange={handleSortOrderChange}
            />
            <Board tickets={tickets} grouping={grouping} sortOrder={sortOrder} />
        </div>
    );
}

export default App;
