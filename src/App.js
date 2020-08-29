import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Jumbotron from "./components/Jumbotron";
import Articles from "./components/Articles";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Articles />
    </>
  );
}

export default App;
