import React, { Component } from 'react';
import './NoteForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }

    //When user's input changes, set newNoteContent
    //to the value in the input box
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, //Value of text's inpput
        })
    }

    writeNote(){
        //Set noteContent for a value of inputs
        this.props.addNote(this.state.newNoteContent);
        //set newNoteContent to an empty string
        this.setState({
            newNoteContent: '',
        })
    }

    render() {
        return(
            <div className="formWrapper">
                <input className="noteInput" placeholder="Jerrome, par ici..." 
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput}/>
                <button className="noteButton"
                onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;