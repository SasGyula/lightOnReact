import logo from './logo.svg';
import './App.css';
import {useContext, useState} from 'react';
import JatekTer from './components/JatekTer';
import { KattContext } from './context/KattContext.js';
function App() {
  const {LISTA} = useContext(KattContext)
  return (
    <div className="App">
      <header className="App-header">LightOn</header>
      <article className="grides">
        <JatekTer lista={LISTA}/>
      </article>
    </div>
  );
}

export default App;
