import React from 'react';
import Card from './Card';

function Column({ title, tickets }) {
    return (
        <div className="column">
            <h3>{title}</h3>
            <div className="cards">
                {tickets.map(ticket => (
                    <Card key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
}

export default Column;
