import React from 'react';

class Note extends React.Component {

    render() {
        if( !this.props.id) {
            this.property = 'Hay Property';
        } else {
            this.property = 
            <div className="empty-note-editor">
                <span>{this.props.id}</span>
            </div>;
        }

        return (
            <span>{this.property}</span>
        );
    }

}

export default Note;
