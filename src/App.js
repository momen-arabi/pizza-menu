import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="font-bold text-2xl">Hello Everyone</h1>
      <small>
        It's <strong>{new Date().toLocaleTimeString()}</strong> now.
      </small>
    </div>
  );
}

export default App;
