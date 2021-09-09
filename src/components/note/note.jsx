import React from 'react';

class Note extends React.Component {


    render() {
        if( !this.props.item) {
            this.property = 'No note selected';
        } else {
            this.property = 
            <div className="empty-note-editor">
                <span className="title">{this.props.item.title}</span>
                <span className="description">{this.props.item.description}</span>
                <span className="key">{this.props.item.key}</span>
            </div>;
        }

        return (
            <div>{this.property}</div>
        );
    }

}

export default Note;
