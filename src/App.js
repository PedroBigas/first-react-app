import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
      <Header name='Pedro Bigas' links={['Sobre','Comprar','Contato','Localização']}></Header>  
  );
}

export default App;
