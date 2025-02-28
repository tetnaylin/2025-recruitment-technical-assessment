import { createTheme, ThemeProvider } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import SearchIcon from "@mui/icons-material/Search";
import SortBar from './SortBar';
import FilterBar from './FilterBar';
import { InputAdornment, TextField } from '@mui/material';

// Freeroom themed colours
const white = '#FFF';
const orange = '#e17027';

const theme = createTheme({
    palette: {
      primary: { main: white },
      secondary: { main: orange },
    },
});

function SearchBar() {
    return (
        <Stack 
            spacing={"15%"} 
            direction={"row"} 
            sx={{
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px"
            }}
        >
            
            <FilterBar/>
        
            <Stack 
                direction={"row"} 
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <TextField 
                    placeholder= "Search for a building..."
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                            ),
                    }}
                    sx={{ 
                        borderRadius: 1, 
                        border: '1px solid', 
                        borderColor: '#c4c4c4',
                        
                    }}
                    size="small"
                >
                </TextField>
            </Stack>

            <SortBar/>

        </Stack>
    );
}

export default SearchBar;