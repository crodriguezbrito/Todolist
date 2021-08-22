import React from 'react';

class Note extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        if( this.props.items.length !== 0) {
            this.property = 'Hay Property';
        } else {
            this.property = 
            <div className="empty-note-editor">
                <span>No note selected!</span>
            </div>;
        }

        console.log(this.props);

        return (
            <span>{this.property}</span>
        );
    }

}

export default Note;
