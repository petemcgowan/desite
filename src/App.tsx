import React from "react";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";
import Social from "./components/Social";

// note I could use state here, but it gets on the prop train, seems to be ok
import { pages } from "./data/pages";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar pages={pages} />
      <div className="container">
        <Routes pages={pages} />
        <Social />
      </div>
    </div>
  );
}

export default App;
