import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Notes from "./components/front/Notes";
import Form from "./components/front/Form";

function App() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    value: "",
  });

  function getNotes() {
    fetch("http://localhost:9999/notes")
      .then((response) => response.json())
      .then((getNotes) => {
        setNotes(getNotes);
      });
  }

  useEffect(() => {
    getNotes();
  }, []);

  const handleChange = function (evt) {
    const formValue = evt.target.value;
    setForm((prevForm) => ({ ...prevForm, value: formValue }));
  };

  const handleAdd = function () {
    const time = new Date();
    const newNote = form.value;

    if (newNote) {
      fetch("http://localhost:9999/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes: newNote }),
      });

      setForm({
        value: "",
      });
      getNotes();
    }
  };

  const handleDelete = function (id) {
    fetch(`http://localhost:9999/notes/${id}`, {
      method: "DELETE",
    });

    getNotes();
  };

  const handleUpdate = function () {
    getNotes();
  };

  return (
    <div className="App">
      <Notes
        className="notes"
        noteList={notes}
        onHandleDelete={handleDelete}
        onHandleUpdate={handleUpdate}
      />
      <Form
        className="form"
        form={form}
        onhandleChange={handleChange}
        onHandleAdd={handleAdd}
      />
    </div>
  );
}

export default App;
