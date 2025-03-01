import { createTheme, ThemeProvider } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CircleIcon from '@mui/icons-material/Circle';
import CardCover from '@mui/joy/CardCover';

import FreeRoomsLogo from '../assets/freeRoomsLogo.png';
import Agsm from '../assets/agsm.webp';
import Ainsworth from '../assets/ainsworth.webp';
import Anitab from '../assets/anitab.webp';
import BiologicalScience from '../assets/biologicalScience.webp';
import BiologicalScienceWest from '../assets/biologicalScienceWest.webp';
import Blockhouse from '../assets/blockhouse.webp';
import BusinessSchool from '../assets/businessSchool.webp';
import CivilBuilding from '../assets/civilBuilding.webp';
import Colombo from '../assets/colombo.webp';
import CseBuilding from '../assets/cseBuilding.webp';

import NavigationIcon from '@mui/icons-material/Navigation';
import { Hidden } from '@mui/material';

// Freeroom themed colours
const white = '#FFF';
const orange = '#e17027';

const theme = createTheme({
    palette: {
      primary: { main: white },
      secondary: { main: orange },
    },
});

function ActionAreaCard() {
  return (
    <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 340 }} elevation={0}>
            <CardActionArea sx={{ minHeight: '345px', width: 315, borderRadius: 3, overflow: 'hidden' }} >
                <CardCover>
                    <img 
                        src={Agsm}
                        alt="Agsm"
                    />
                </CardCover>
                <Fab variant="extended" size="small" sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 3, fontWeight: 700, textTransform: 'lowercase' }} >
                    <CircleIcon sx={{ mr: 1, height: "10px", color: "#61af4f" }} />
                    9 rooms available
                </Fab>
            </CardActionArea>
        </Card>
    </ThemeProvider>
  );
}

export default ActionAreaCard;
