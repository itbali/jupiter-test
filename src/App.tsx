import React from 'react';
import './App.css';
import {Header} from "./components/Header";

function App() {
  return (
    <div className={'wrapper'}>
      <Header/>
      <section className={'container'}></section>
    </div>
  );
}

export default App;
