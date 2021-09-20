import React from 'react';


class ListItems extends React.Component {

  constructor(props) {
    super(props);
    this.loadNote = this.loadNote.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.onToggleStarred = this.onToggleStarred.bind(this);
    this.handleChangeChk = this.handleChangeChk.bind(this);
  }

  loadNote(item,e) {
    this.props.loadItem(item);
  //https://es.reactjs.org/docs/lifting-state-up.html
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
        
    if( this.props.items.length === 0 ) {
      this.display = <div><p>Empty notes</p></div>
    } else {
        this.display =  
        <div>
        {this.props.items.map((item,i) => (
            <div key={item.key} className="note" onClick={(e) => this.loadNote(item, e)}>
              { (item.completed) ? <span className="icon-button note_completed completed material-icons" onClick={ (e) =>this.handleChangeChk(item.key)} >check</span> : <span className="icon-button note_completed material-icons" onClick={ (e) =>this.handleChangeChk(item.key)} >check</span>}
              <div className="note__title">{item.title}</div>
              { (item.starred) ? <span className="icon-button note_starred starred material-icons" onClick={(e) => this.onToggleStarred(item, item.key)} >star</span> : <span className="icon-button note_starred material-icons" onClick={(e) => this.onToggleStarred(item, item.key)} >star_outline</span>}
              <span className="icon-button note_delete material-icons" onClick={(e) => this.removeItem(item, item.key)} >delete_outline</span>
            </div>
          ))
        }
      </div>
    }

    return (
        <div>{this.display}</div>
    );
  }
}

export default ListItems;
