import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RoutesPage from "./pages/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <RoutesPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
