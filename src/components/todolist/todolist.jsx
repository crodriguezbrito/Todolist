import React from 'react';
import Filternotes from '../filternotes/filternotes';
import Note from '../note/note';
import ListItems from '../listitems/listitems';
import "./todolist.css";

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {value: '', items:[], item:0};

    this.newNote = this.newNote.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.onToggleStarred = this.onToggleStarred.bind(this);
  }

  // New Note Button
  newNote(event) {
    event.preventDefault();

    const item = {
        'key' : this.state.items.length + 1,
        'title' : 'este es mi titled',
        'content' : '',
        'completed': false,
        'starred' : false,
        'categories': [],
    };

    this.setState({
      items: this.state.items.concat( item ),
      id: this.state.items.length + 1,
      item: item
    });

  }

  //LoadItem on note section
  onClickItem(item) {
    this.setState({item:item});
  }

  // Remove item from list
  removeItem( item, key ) {
    const array = this.state.items;
    array.splice(key, 1);
  }

  //StartONOFF
  onToggleStarred( item,key ) {
    const array = this.state.items;
    const todo = array.find( (todo) => todo.key === key+1 );
    todo.starred = !todo.starred;
    this.setState({items:array});
    console.log('test');
  }

    render() {

      return (
        <div className="mynotes">
            <div className="header">
              <div className="header-title-and-filter">
                <h1 className="mynotes-header-title">My Notes</h1>
                
              </div>
              <div className="header-filters">
                  <div className="filters">
                    <Filternotes />
                  </div>
                </div>
            </div>
            <div className="content">
              <div className="notelist">
                <ListItems loadItem={this.onClickItem} removeItem={this.removeItem} onToggleStarred= {this.onToggleStarred} items={this.state.items}/>
              </div>
              <div className="new-note-section">
                <Note loadItem={this.onClickItem} item={this.state.item}/>
                <div className="footer-new-button">
                    <span className="button-new-note" onClick={this.newNote}> Add </span>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }

  export default Todolist;
