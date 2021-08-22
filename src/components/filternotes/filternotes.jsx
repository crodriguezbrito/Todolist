import React from 'react';
import './filternotes.css';
class Filternotes extends React.Component {
    render() {
        return (
            <div className="filter-notes-container">
                <div className="filter-notes-status"> 
                    <ul className="filter-notes">
                        <li className="filter-note-item filter-note-item-todo">TO DO</li>
                        <li className="filter-note-item filter-note-item-completed">COMPLETED</li>
                        <li className="filter-note-item filter-note-item-all">ALL</li>
                    </ul>
                </div>
                <div className="filter-notes-class"> 
                    <ul className="filter-notes">
                        <li className="filter-note-item filter-note-item-class-all">ALL</li>
                        <li className="filter-note-item filter-note-item-class-work">WORK</li>
                        <li className="filter-note-item filter-note-item-class-home">HOME</li>
                        <li className="filter-note-item filter-note-item-class-personal">PERSONAL</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filternotes;
