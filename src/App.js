import './App.css';
import Header from './components/Header/Header';
import { Divider } from '@mui/material';
import Body from './components/Body/Body';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className="App">
      {!isMobile && <Header />}
      <Divider />
      <Body />
    </div>
  );
}

export default App;
