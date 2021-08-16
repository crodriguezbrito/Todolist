import React from 'react';
import Filternotes from '../filternotes/filternotes';
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

    console.log(this.state.items);

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
      return (
        <div className="mynotes">
            <h1>My Notes</h1>
            <div className="filters">
              <div className="filter-letf">
                <Filternotes />
              </div>
            </div>
            <div className="notelist">
              <div>{listItems}</div>
            </div>
            <div className="new-note-section">
              <form onSubmit={this.handleSubmit}>
                  <input type="text" className="title-note"/>
                  <textarea className="description-note"></textarea>
              </form>
              <div className="footer-new-button">
                  <span className="button-new-note" onClick={this.newNote}> Add </span>
              </div>
            </div>
        </div>
      );
    }
  }

  export default Todolist;
