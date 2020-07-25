import React from 'react';
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Core from "./components/core/Core";
import Temperature from "./components/temperature/Temperature";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Core>
        <div className="grid__col grid__col--sm-5">
          <Temperature />
        </div>
      </Core>
    </div>
  );
}

export default App;
