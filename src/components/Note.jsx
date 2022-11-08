import React from "react";

function Note(props) {
  function deleteit(){
    props.deleteItem(props.id)
  }
  return (
    <div className="note" >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteit}>DELETE</button>
    </div>
  );
}

export default Note;
