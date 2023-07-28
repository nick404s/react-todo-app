import { 
    ListItem, 
    TextField ,
    InputAdornment, 
    IconButton 
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import { useRef } from 'react';


export default function TodoForm({ createItem }) {

    const inputTextRef = useRef();

    const handleOnSubmit = (evt) => {

        evt.preventDefault();
        // get the input text from the input ref
        const inputText = inputTextRef.current.value;

        if (inputText.trim().length) {
            // add a new item to the list
            createItem(inputText);
        }
        // clear the input
        inputTextRef.current.value = '';
    };


    return (
        <ListItem>
            <form onSubmit={handleOnSubmit}>
                <TextField 
                    autoFocus
                    id="outlined-basic" 
                    label="Add Todo"
                    variant="outlined"
                    inputRef={inputTextRef}
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