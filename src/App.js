import logo from './logo.svg';
import selelogo from './color_selechoi-1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={selelogo} className="App-logo" alt="logo" />
        <p>
          Select Choice Coming Soon!
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
