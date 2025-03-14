// App.jsx
import React from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* The hover-to-expand navbar pinned on the left */}
      <Navbar />

      {/* Main content offset to the right so the navbar doesn't overlap */}
      <div style={{ marginLeft: "60px" }}>
        <HomePage />
      </div>
    </>
  );
}

export default App;
