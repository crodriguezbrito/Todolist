import React from 'react';
import Filternotes from '../filternotes/filternotes';
import "./todolist.css";

class Todolist extends React.Component {

  constructor(props) {
    super(props);
    const items = [1,2,3];

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
    this.setState({
      items: this.state.items.concat(  this.state.items.length + 1 )
    });

  }

    render() {
      const items = this.state.items;
      const listItems = items.map((number) =>
      <div key={number.toString()} className="note">
        {number}
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
              <ul>{listItems}</ul>
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
