import React from 'react';

class Note extends React.Component {

    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.onToggleStarred = this.onToggleStarred.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
    }

    removeItem( item, i ) {
        this.props.removeItem(item,i);
      }
    
      onToggleStarred (item , i) {
        this.props.onToggleStarred( item,i );
      }
    
      handleChangeChk(key) {
        this.props.onChangeCompleted(key);
      }

    render() {
        const item = this.props.item;
        if( !item) {
            this.property = 'No note selected';
        } else {

            const title = (item.title) ? item.title : 'Create a first note';
            const content = (item.content) ? item.content : 'You can create all notes you want';
            this.property =
            <div className="app-note-edit">
                <div className="note-editor__header">
                    <div className="note-editor">
                        <input class="note-editor__title" placeholder="Set the note title" value={title}/>
                        <span className="key">{item.key}</span>
                        <input type="checkbox" defaultChecked={item.completed} onChange={ (e) =>this.handleChangeChk(item.key)}/>
                        { (item.starred) ? <span className="starred" onClick={(e) => this.onToggleStarred(item, item.key)} >⭐</span> : <span className="not_starred" onClick={(e) => this.onToggleStarred(item, item.key)} >✩</span>}
                        <span className="delete material-icons" onClick={(e) => this.removeItem(item, item.key)} >delete_outline</span>
                    </div>
                </div>
                <div className="categories-selector">

                </div>
                <div className="note-editor-content">
                    <textarea class="note-editor__content" placeholder="Set the note content">{content}</textarea>
                </div>
                
            </div>;
        }

        return (
            <div>{this.property}</div>
        );
    }

}

export default Note;
