import { 
    ListItem, 
    TextField ,
    InputAdornment, 
    IconButton 
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';


export default function TodoForm({ createItem }) {

    const [text, setText] = useState('');

    const handleOnChange = (evt) => {

        const value = evt.target.value;

        if (value) {
            setText(value);
        }  
    };

    const handleOnSubmit = (evt) => {

        evt.preventDefault();

        if (text) {
            // add a new item to the list
            createItem(text);
        }
        // clear the input
        setText('');
    };


    return (
        <ListItem>
            <form onSubmit={handleOnSubmit}>
                <TextField 
                    autoFocus
                    id="outlined-basic" 
                    label="Add Todo"
                    variant="outlined"
                    value={text}
                    onChange={handleOnChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="create item"
                                edge="end"
                                type="submit"
                            >
                            <AddIcon />
                            </IconButton>
                            </InputAdornment>
                            ),
                    }} 
                />
            </form>
        </ListItem>
    )
}