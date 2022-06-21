import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import MainCard from './MainCard';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Nav />

      <Grid container spacing={2}>
        <Grid item xs={2} md={2}>
        </Grid>
        <Grid item xs={8} md={8}>
          <MainCard />
        </Grid>
        <Grid item xs={2} md={2}>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
