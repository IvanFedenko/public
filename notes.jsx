const DEFOULT_color = 'yellow';

const Note = React.createClass ({
  render() {
    const {
      color,
      children
    } = this.props;

    return(
      <div className="note" style={{ backgroundColor: color}}>
      {children}
      </div>
    );
  }
});

const NotesEditor = React.createClass ({
  render() {
    return(
      <div className="editor">
        <textarea
          rows={5}
          placeholder="Enter your note here..."
          className= "editor__textarea"
        />

        <button className="editor__button">Add</button>
      </div>
    );
  }
});

const NotesGrid = React.createClass ({
  render() {
    const {notes} = this.props;
    return(
      <div className="grid">
      {
        notes.map(note =>
        <Note key={note.id}
              text={note.text}
              color={note.color}
            />
        )
      }
      </div>
    );
  }
});

const NotesApp = React.createClass ({
  getInitialState() {
    return {
       notes:[{id:1, color:'yellow', text:"Hey! I am the first note here!"},
              {id:2, color:'yellow', text:"Hey! I am the second note here!"}]
    };
  },
  render() {
    return(
      <div className="app">
        <h2 className="app__header">NotesApp</h2>
        <NotesEditor/>
        <NotesGrid notes={this.state.notes} />
      </div>
    );
  }
});

ReactDOM.render(
  <NotesApp/>,
  document.getElementById ('notes')
);
