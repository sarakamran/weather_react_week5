import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            Sara Kamran
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sarakamran/weather_react_week5"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://rad-muffin-5fa658.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
