import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';

class App extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    // Setup React state of component
    this.state = {
      notes: [
        { id: 1, noteContent: "Jerrome!"},
        { id: 2, noteContent: "Jerrmaine!"},
      ],
    }
  }

  addNote(note){
    //Push new note in the notes array
    const previousNotes = this.state.notes;
    previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
    
    this.setState({
      notes : previousNotes
    });
    this.state.notes = previousNotes;
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">To Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
              )
            })
          }
          </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App;
