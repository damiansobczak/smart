import React from 'react';
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Core from "./components/core/Core";
import Temperature from "./components/temperature/Temperature";
import Reports from "./components/reports/Reports";
import Download from "./components/download/Download";
import WeeklyStats from "./components/weeklyStats/WeeklyStats";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Core>
        <Temperature />
        <Reports />
        <Download />
        <WeeklyStats />
      </Core>
    </div>
  );
}

export default App;
