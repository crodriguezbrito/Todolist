import React from 'react';
import './filternotes.css';
class Filternotes extends React.Component {
    render() {
        return (
            <div className="filter-notes-container">
                <ul className="filter-notes">
                    <li className="filter-note-item filter-note-item-todo">TO DO</li>
                    <li className="filter-note-item filter-note-item-completed">COMPLETED</li>
                    <li className="filter-note-item filter-note-item-all">All</li>
                </ul>
            </div>
        );
    }
}

export default Filternotes;
