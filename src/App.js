//import logo from './logo.svg';
import './App.css';
import Informacion from './fron-end/Informacion';
import NavBar from './fron-end/NavBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <img className='imgaen' src='../src/img/Mapa-3.png' alt=''></img>
      <NavBar />
      <Informacion/>
    </div>
  );
}

export default App;
