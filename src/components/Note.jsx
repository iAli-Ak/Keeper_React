import React from "react";
import ClearIcon from '@mui/icons-material/Clear';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DeleteIcon from '@mui/icons-material/Delete';
function Note(props) {

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={
        () => {
            props.onDelete(props.id);
        }
      }><DeleteIcon/></button>
    </div>
  );
}

export default Note;
