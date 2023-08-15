import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

export default function TodoItem({ todo, removeItem, toggleItem, editItem }) {
  const { id, title, completed } = todo;

  const labelId = `checkbox-list-label-${id}`;

  const [text, setText] = useState(title);

  const [isDisabled, setIsDisabled] = useState(true);

  // change text
  const handleChange = (evt) => {
    const value = evt.target.value;

    if (value) {
      setText(value);
    }
  };

  // save text
  const handleSave = () => {
    editItem(id, text);
    setIsDisabled(true);
  };

  // unblock input
  const handleDisable = () => {
    setIsDisabled(false);
  };

  return (
    <ListItem key={id}>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggleItem}
          />
        </ListItemIcon>
        <TextField
          fullWidth
          variant="standard"
          id={labelId}
          style={{ textDecoration: completed ? "line-through" : "none" }}
          value={text}
          disabled={isDisabled}
          onChange={handleChange}
          onBlur={handleSave}
        />
      </ListItemButton>

      <IconButton onClick={handleDisable}>
        <EditIcon />
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton edge="end" aria-label="comments" onClick={removeItem}>
        <DeleteForeverIcon />
      </IconButton>
    </ListItem>
  );
}
