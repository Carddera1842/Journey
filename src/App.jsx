// App.jsx
import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import MapView from "./components/MapView";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginLeft: "60px" }}>
        <HomePage />
        <MapView />
      </div>
    </>
  );
}

export default App;
