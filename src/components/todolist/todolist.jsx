import React from 'react';
import Filternotes from '../filternotes/filternotes';
import Note from '../note/note';
import ListItems from '../listitems/listitems';
import "./todolist.css";

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {value: '', items:[], item:0, filter:'to-do', filter_tag:'all', search:''};

    this.newNote = this.newNote.bind(this);
    this.onClickItem = this.onClickItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.onToggleStarred = this.onToggleStarred.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onToggleCategories = this.onToggleCategories.bind(this);
    this.searchItem = this.searchItem.bind(this);

  }

  // New Note Button
  newNote(event) {
    event.preventDefault();

    const item = {
        'key' :  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        'title' : 'este es mi title',
        'content' : '',
        'completed': false,
        'starred' : false,
        'categories': [],
    };

    this.setState({
      items: this.state.items.concat( item ),
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
    const index = array.findIndex( (todo) => todo.key === key );
    array.splice(index, 1);
    
  }

  //StartONOFF
  onToggleStarred( item,key ) {
    const array = this.state.items;
    const todo = array.find( (todo) => todo.key === key );
    todo.starred = !todo.starred;
    this.setState({items:array});
  }

  onChangeCompleted( key ) {
    const array = this.state.items;
    const todo = array.find( (todo) => todo.key === key );
    todo.completed = !todo.completed;
    this.setState({items:array});
  }

  onTextChange ( value, key, type ) {
    const array = this.state.items;
    const todo = array.find( (todo) => todo.key === key );
    switch(type) {
      case 'title':
        todo.title = value;
        break;
      case 'content':
        todo.content = value;
        break;
      default:
        // code block
    }
    this.setState({
      items:array,
      item:todo
    });

  }

  onFilterChange(new_filter,section) {
    switch (section) {
      case 'primary':
        this.setState({
          filter:new_filter,
        });
        break;

      case 'secondary':
        this.setState({
          filter_tag:new_filter,
        });
        break;
      default:
    }   
  }

  onToggleCategories(category,item) {
    const index = item.categories.indexOf(category);
    if (index > -1) {
      item.categories.splice(index, 1);
    } else {
      item.categories.push(category);
    }
    this.setState({
      item:item
    });
  }

  searchItem(value) {
    this.setState({
      search:value,
    });

  }

    render() {

      return (
        <div className="mynotes">
            <div className="header">
              <div className="header-title-and-filter">
                <h1 className="mynotes-header-title">My Notes</h1>
                <div className="app-header__search">
                  <input className="app-header__search__input" onChange={(e) => this.searchItem(e.target.value)}/>
                </div>
              </div>
              <div className="header-filters">
                  <div className="filters">
                    <Filternotes activeFilter={this.state.filter} activeFilterTags={this.state.filter_tag} onFilterChange={this.onFilterChange}/>
                  </div>
                </div>
            </div>
            <div className="content">
              <div className="notelist">
                <ListItems loadItem={this.onClickItem} removeItem={this.removeItem} onToggleStarred= {this.onToggleStarred} onChangeCompleted = {this.onChangeCompleted} items={this.state.items} activeFilter={this.state.filter} activeFilterTags={this.state.filter_tag} searchItem={this.state.search}/>
              </div>
              <div className="new-note-section">
                <Note removeItem={this.removeItem} onTextChange={this.onTextChange} onToggleStarred= {this.onToggleStarred} onChangeCompleted = {this.onChangeCompleted} item={this.state.item} onToggleCategories={this.onToggleCategories}/>
                <div className="footer-new-button">
                    <span className="button-new-note material-icons" onClick={this.newNote}> add </span>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }

  export default Todolist;
