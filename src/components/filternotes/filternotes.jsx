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
        this.filters_tags = [
            {
                name: "All",
                value: 'all'
            },
            {
                name: "Work",
                value: 'work'
            },
            {
                name: "Home",
                value: 'home'
            },
            {
                name: "Personal",
                value: "personal"
            }
        ];

      }
    onFilterChange(value,section) {
        // Hacer el handle cuando el filtro cambia para luego filtar los items que son de este tipoc
        this.props.onFilterChange(value,section);
    }
    render() {
        return (
            <div className="filter-notes-container">
                <div className="filter-notes-status"> 
                    <ul className="filter-notes">
                    {this.filters.map((filter,i) => (
                        
                        <li key={i} className={`filter ${filter.value === this.props.activeFilter ? 'active' : ''} `} onClick={e => this.onFilterChange(filter.value,'primary')}>{filter.name}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="filter-notes-class"> 
                    <ul className="filter-notes-tags">
                    {this.filters_tags.map((filter,i) => (
                        
                        <li key={i} className={`filter ${filter.value === this.props.activeFilterTags ? 'active' : ''} `} onClick={e => this.onFilterChange(filter.value,'secondary')}>{filter.name}</li>
                        ))
                    }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Filternotes;
