import React from 'react';
import './filternotes.css';
class Filternotes extends React.Component {

    constructor(props) {
        super(props);
        
        this.filters = [
            {
                name: "To do",
                value: 'to-do'
            },
            {
                name: "Completed",
                value: 'completed'
            },
            {
                name: "All",
                value: ""
            }
        ];

      }
    onFilterChange(value) {
        // Hacer el handle cuando el filtro cambia para luego filtar los items que son de este tipoc
        this.props.onFilterChange(value);
    }
    render() {
        return (
            <div className="filter-notes-container">
                <div className="filter-notes-status"> 
                    <ul className="filter-notes">
                    {this.filters.map((filter,i) => (
                        
                        <li key={i} className={`filter ${filter.value === this.props.activeFilter ? 'active' : ''} `} onClick={e => this.onFilterChange(filter.value)}>{filter.name}</li>
                        ))
                    }
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
