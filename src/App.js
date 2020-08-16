import React from 'react';
import '../src/App.css'
import '../src/bootstrap.css'
import Navbar from './components/NavBar'
import MainContent from './components/MainContent'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      </header>
      <MainContent/>
    </div>
  );
}

export default App;
