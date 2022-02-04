import React from "react";
import "./app.css";
import NavBar from "./Components/navbar/NavBar";
import Medias from "./Components/VideoFiles/Medias";
import MySelf from "./Components/me/MySelf";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar></NavBar>
      <Medias></Medias>
      <MySelf />
    </div>
  );
}

export default App;
