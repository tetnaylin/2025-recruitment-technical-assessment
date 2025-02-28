import { createTheme, ThemeProvider } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GridIcon from "@mui/icons-material/GridViewRounded";
import MapIcon from "@mui/icons-material/Map";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import SearchIcon from "@mui/icons-material/Search";

import FreeRoomsLogo from '../assets/freeRoomsLogo.png';

// Freeroom themed colours
const white = '#FFF';
const orange = '#e17027';

const theme = createTheme({
    palette: {
      primary: { main: white },
      secondary: { main: orange },
    },
});

function Header() {
    return (
        <ThemeProvider theme={theme}>
            <AppBar 
                position="fixed"
                // Get rid of box shadow
                elevation={0}
                sx={{
                    borderBottom: `1px solid`,
                    borderColor: '#e0e0e0',
                }}
            >
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"
                    sx={{borderRadius: 0}}
                >
                    <img src={FreeRoomsLogo} alt="Logo" height={50} />
                    <Typography 
                        variant="h5" 
                        component="div" 
                        color="secondary" 
                        fontWeight={700}
                        fontFamily={""}
                        fontSize={"2rem"}
                    >
                        Freerooms
                    </Typography>
                </IconButton>
                
                <Button color={"secondary"} sx={{ marginLeft: "auto" }}>Login</Button>
                
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}  

export default Header;