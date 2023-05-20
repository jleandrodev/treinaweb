import './App.css';
import Content from './ui/surfaces/content/Content';
import Footer from './ui/surfaces/footer/Footer';
import Header from './ui/surfaces/header/Header'
import { Box } from '@mui/material'


function App(   ) {
  
  return (
    <Box className="app">

      <Header />
      <Content />
      <Footer />
      
    </Box>
  );
}

export default App;
