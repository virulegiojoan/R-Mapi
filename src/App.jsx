import React from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  return (
    <div className='fondo text-light font-weight-bold'>
        <span className='text-suffix'>- By Joa</span>
      <CharacterList />
    </div>
  );
}

export default App;
