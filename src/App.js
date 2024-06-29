import "./App.css";
import React, { Component } from "react";
import Hero from "./Hero/Hero";
import Drinks from "./Drinks/Drinks";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Hero />
      <Element name="team">
        <Team />
      </Element>
      <Element name="drinks">
        <Drinks />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
