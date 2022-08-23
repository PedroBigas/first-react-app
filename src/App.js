import React from 'react';
import './App.css';
import Header from './Header';
import Counter from './Counter';

function App() {
  return (
    <div>
      {/* <Header name='Pedro Bigas' links={['Sobre','Comprar','Contato','Localização']}></Header>   */}
      <Counter count={5}></Counter>
    </div>
  );
}

export default App;
