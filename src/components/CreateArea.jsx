import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpand] = React.useState(false);
    const [note, setNote] = React.useState("");

    function expand() {
            setExpand(true);
    }
    //Create an array of object based on the elements that use this function for Ex:(input, textarea)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNote((prevNote) => ({ ...prevNote, [name]: value }));
    };

    const handleAdd = (e) => {
        e.preventDefault();
        props.onAdd(note);
        setNote({ title: "", content: "" });
      };
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />}
        <textarea name="content" placeholder="Take a note..." rows={isExpanded? "3": "1"} onChange={handleChange} value={note.content} onClick={expand}/>
        {isExpanded && <Zoom in={true} easing="ease-in-out">
        <Fab onClick={handleAdd}
        ><AddIcon /></Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
