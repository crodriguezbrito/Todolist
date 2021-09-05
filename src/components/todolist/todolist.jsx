import React from 'react';
import Filternotes from '../filternotes/filternotes';
import Note from '../note/note';
import ListItems from '../listitems/listitems';
import "./todolist.css";

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {value: '', items:[], id:0};


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
      items: this.state.items.concat( item ),
      id: this.state.items.length + 1
    });

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
                <ListItems items={this.state.items} />
              </div>
              <div className="new-note-section">
                <Note id={this.state.id}/>
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
