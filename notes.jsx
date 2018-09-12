const Notes= [{id:1, color:'yellow', text:"Hey! I am the first note here!"}];

const Note = React.createClass ({
  render() {
    const {text} = this.props;
    return(
      <div>
      {text}
      </div>
    );
  }
});
const NotesEditor = React.createClass ({
  render() {
    return(
      <div>
      Hey! i am Notes Editor!
      </div>
    );
  }
});
const NotesGrid = React.createClass ({
  render() {
    const {notes} = this.props;
    return(
      <div>
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
      <div>
        <h2>NotesApp</h2>
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
