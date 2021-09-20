import React from 'react';

class Note extends React.Component {

    constructor(props) {
        super(props);

        this.removeItem = this.removeItem.bind(this);
        this.onToggleStarred = this.onToggleStarred.bind(this);
        this.handleChangeChk = this.handleChangeChk.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);

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

      onTitleChange(value,key) {
        this.props.onTitleChange( value,key );
      }

    render() {
        const item = this.props.item;
        if( !item) {
            this.property = 'No note selected';
        } else {

            const title = (item.title) ? item.title : 'Create a first note';
            const content = (item.content) ? item.content : 'You can create all notes you want';
            this.property =
            <div className="note-editor">
                <div className="note-editor__header">
                    <input type="text" className="note-editor__title" placeholder="Set the note title"  onChange={e => this.onTitleChange(e.target.value,item.key)} value={title}/>
                    { (item.completed) ? <span className="icon-button note_completed completed material-icons" onClick={ (e) =>this.handleChangeChk(item.key)} >check</span> : <span className="icon-button note_completed material-icons" onClick={ (e) =>this.handleChangeChk(item.key)} >check</span>}
                    { (item.starred) ? <span className="icon-button note_starred starred material-icons" onClick={(e) => this.onToggleStarred(item, item.key)} >star</span> : <span className="icon-button note_starred material-icons" onClick={(e) => this.onToggleStarred(item, item.key)} >star_outline</span>}
                    <span className="icon-button note_delete material-icons" onClick={(e) => this.removeItem(item, item.key)} >delete_outline</span>
                </div>
                <div className="categories-selector">

                </div>
                <div className="note-editor-content">
                    <textarea className="note-editor__content" placeholder="Set the note content">{item.content}</textarea>
                </div>
                
            </div>;
        }

        return (
            <div className="app-note-edit">{this.property}</div>
        );
    }

}

export default Note;
