import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography 
} from '@mui/material';

import { blueGrey } from '@mui/material/colors';


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: blueGrey[700] }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}