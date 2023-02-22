import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RoutesPage from "./pages/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesPage />
      </Router>
    </div>
  );
}

export default App;
