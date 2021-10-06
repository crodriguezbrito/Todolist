import React from 'react';


class ListItems extends React.Component {

  constructor(props) {
    
    super(props);
    this.getTodoItems = this.getTodoItems.bind(this);
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

  getTodoItems(items,active_filter,active_filter_tags,searchItem) {
    items = items.filter( (item) => (item.title.includes(searchItem)) );
    switch( active_filter ) {
       case 'to-do':
         items = items.filter( (item) => (!item.completed) );
         break;
       case 'completed':
         items = items.filter( (item) => (item.completed) );
         break;
       default:
    }
    switch( active_filter_tags ) {
      case 'work':
        items = items.filter( (item) => (item.categories.includes('work')) );
        break;
      case 'home':
        items = items.filter( (item) => (item.categories.includes('home')) );
        break;
      case 'personal':
        items = items.filter( (item) => (item.categories.includes('personal')) );
      break;
      default:
   }

    return items;
  }

  render() {
    const items = this.getTodoItems( this.props.items, this.props.activeFilter, this.props.activeFilterTags, this.props.searchItem);
    if( items.length === 0 ) {
      this.display = <div><p>Empty notes</p></div>
    } else {
        this.display =  
        <div>
        {items.map((item,i) => (
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
