import React from 'react';
import Column from './Column';

function Board({ tickets, grouping, sortOrder }) {
    const groupTickets = (tickets) => {
        let groups = {};
        tickets.forEach(ticket => {
            const key = grouping === 'status' ? ticket.status
                        : grouping === 'user' ? ticket.assignedTo
                        : ticket.priority;

            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(ticket);
        });
        return groups;
    };

    const sortedTickets = (tickets) => {
        return tickets.sort((a, b) => {
            if (sortOrder === 'priority') {
                return b.priority - a.priority;
            } else if (sortOrder === 'title') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
    };

    const groupedTickets = groupTickets(sortedTickets(tickets));

    return (
        <div className="board">
            {Object.keys(groupedTickets).map(group => (
                <Column key={group} title={group} tickets={groupedTickets[group]} />
            ))}
        </div>
    );
}

export default Board;
