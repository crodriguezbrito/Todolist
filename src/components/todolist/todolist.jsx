import React from 'react';
import Filternotes from '../filternotes/filternotes';
import Note from '../note/note';
import "./todolist.css";

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    
    const items = [];

    this.state = {value: ''};
    this.state = {items: items};


    //this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newNote = this.newNote.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Create a new note: ' + this.state.value);
    event.preventDefault();

    //Aquuí hay que guardar las notas para imprimir.
    // Llamar al componente que almacena las notas para que imprima una nueva.

  }

  newNote(event) {

    const item = {
        'key' : this.state.items.length + 1,
        'title' : 'este es mi title',
        'description' : '',
    };

    this.setState({
      items: this.state.items.concat( item )
    });

  }

    render() {
      const items = this.state.items;
      const listItems = items.map((item,i) =>
        <div key={i} className="note">
          <span className="title">{item.title}</span>
          <span className="description">{item.description}</span>
          <span className="key">{item.key}</span>
        </div>
      );
      const note = {
        id: 0,
      };
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
                <div>{listItems}</div>
              </div>
              <div className="new-note-section">
                <Note id={note.id} items={items} />
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
