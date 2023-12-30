import Home from './Home'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './context/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
