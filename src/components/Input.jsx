import React, { useState } from "react";



function Input(props) {
    const [input, setInput] = useState({ title: "", content: "" });
    function handleInput(event) {
        const { name, value } = event.target;

        setInput(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }
    function addit(event){
        props.addItem(input);
        setInput({title:"",content:""});
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input name="title" onChange={handleInput} placeholder="Title" value={input.title} />
                <textarea name="content" onChange={handleInput} placeholder="Take a note..." rows="3" value={input.content} />
                <button onClick={addit}>Add</button>
            </form>
        </div>
    );
}

export default Input;