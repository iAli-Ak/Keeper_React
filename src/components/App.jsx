import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = React.useState([]);

  // Add Note
  function addNote(note) {
    setNoteList((prevNote) => {
      return [...prevNote, note];
    })
  }

  // Delete Note
  function deleteNote(id) {
    setNoteList((prevNote) => {
      return prevNote.filter((item, index) => index !== id);
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((note, index) => (
        <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
