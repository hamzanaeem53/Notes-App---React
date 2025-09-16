import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NewNoteForm from "./components/NewNoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rouded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Notes App</h1>
        <NewNoteForm notes={notes} addNote={setNotes} />
        <NoteList notes={notes} deleteNote={handleDelete} />
      </div>
    </>
  );
}

export default App;