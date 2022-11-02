import {useEffect, useState} from "react"
import './App.css';
import Notes from "./components/front/Notes";
import Form from "./components/front/Form";
import {nanoid} from 'nanoid';


function App() {
  
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    value: ''
  })

  //useEffect (() => {
   // fetch(process.env.REACT_APP_SERVER)
      // .then(response => console.log(response))
      //.then((getNotes) => {
       // console.log(JSON.stringify(getNotes, null, 2))
      //})
  // },)

  const handleChange = function(evt) {
    const formValue = evt.target.value;
    setForm(prevForm => ({...prevForm, value: formValue}))
  }

  const handleAdd = function() {
  //   const newNote = {
  //     "id": `${nanoid()}`,
  //     "content": `${form.value}`
  // }

  // fetch(process.env.REACT_APP_SERVER, {
  //   method: 'POST',
  //   body: JSON.stringify(newNote)
  // })

  notes.push({
    "id": `${nanoid()}`,
    "content": `${form.value}`
})
  console.log(notes)
  setNotes(notes)
  console.log(notes)

  setForm({
    value: ''
  })
  }

  console.log(notes)

  return (
    <div className="App">
      <Notes className="notes" noteList={notes}/>
      <Form className="form" form={form} onhandleChange={handleChange} onHandleAdd={handleAdd}/>
    </div>
  );
}

export default App;
