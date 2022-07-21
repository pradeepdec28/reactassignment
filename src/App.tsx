import { Container } from '@mui/material';
import React from 'react';
import MainScreen from './screens/MainScreen';


function App() {
  return (
      <Container maxWidth="lg" sx={{ mt: 3}}>
      <MainScreen />  
      </Container>
  );
}

export default App;
