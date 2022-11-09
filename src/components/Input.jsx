import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function Input(props) {
    const [input, setInput] = useState({ title: "", content: "" });
    const [expand, setExpand] = useState(false);
    function handleInput(event) {
        const { name, value } = event.target;

        setInput(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function handleExpand() {
        setExpand(true);
    }
    function addit(event) {
        props.addItem(input);
        setInput({ title: "", content: "" });
        event.preventDefault();
    }
    return (
        <div>
            <form className="create-note">
                {expand && <input onClick={handleExpand} name="title" onChange={handleInput} placeholder="Title" value={input.title} />}
                <textarea onClick={handleExpand} name="content" onChange={handleInput} placeholder="Take a note..." rows={expand ? "3" : "1"} value={input.content} />
                <Zoom in={true}><Fab onClick={addit}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default Input;