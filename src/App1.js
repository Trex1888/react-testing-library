import logo from "./logo.svg";
import "./App.css";

function App1() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p data-testid="para">
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <h2 data-testid="header1">food</h2>

        <a
          data-testid="atag"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App1;
