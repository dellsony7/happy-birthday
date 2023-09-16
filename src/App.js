import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import BirthdayCard from "./components/BirthdayCard";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <BirthdayCard />
    </div>
  );
}

export default App;
