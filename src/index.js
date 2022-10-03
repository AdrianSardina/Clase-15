import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './Game';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ahorcadito from './component/Ahorcadito';
const root = ReactDOM.createRoot(document.getElementById('root'));

  
root.render(
  <Container style={{ backgroundColor:"#9390DF" }}>

 <Ahorcadito></Ahorcadito>
  </Container>
   
   
  
  
);
