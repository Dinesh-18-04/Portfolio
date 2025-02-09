import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Projects />
    </div>
  );
};

export default App;
