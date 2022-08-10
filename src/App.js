import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Head from "./components/Head";
import Destinations from "./components/Destinations";
import Packages from "./components/Packages";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Destinations />
      <Packages />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
