import logo from "./logo.svg";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();

  return (
    <div className="container mx-auto px">
      <h2>Hello Wooooorld!</h2>
      <small>
        It's <strong>{time}</strong> now.
      </small>
    </div>
  );
}

export default App;
