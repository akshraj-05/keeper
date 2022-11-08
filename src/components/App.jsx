import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import Input from "./Input";


function everyNote(note) {
  return <Note key={note.key} title={note.title} content={note.content} />;
}

function App() {


  const [items, setItem] = useState([]);
  function addItem(item) {
    setItem(prev => { return [...prev, item] });
  }
  function deleteItem(id) {
    setItem(prev => {

      return prev.filter((item, index) => { return index !== id })
    })

  }
  return (
    <div>
      <Header />
      <Input addItem={addItem} />
      {notes.map(everyNote)}
      {items.map((item, index) => {
        return <Note key={index} id={index} title={item.title} content={item.content} deleteItem={deleteItem} />
      })}


      <Footer />
    </div>
  );
}

export default App;
