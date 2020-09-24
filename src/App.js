import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';

export const UserContext = createContext();

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
