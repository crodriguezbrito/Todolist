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
              <input type="checkbox" defaultChecked={item.completed} onChange={ (e) =>this.handleChangeChk(item.key)}/>
              <span className="title">{item.title}</span>
              { (item.starred) ? <span className="starred" onClick={(e) => this.onToggleStarred(item, item.key)} >⭐</span> : <span className="not_starred" onClick={(e) => this.onToggleStarred(item, item.key)} >✩</span>}
              <span className="delete" onClick={(e) => this.removeItem(item, item.key)} >🗑</span>
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
