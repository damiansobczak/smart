import React from 'react';
import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Core from "./components/core/Core";
import Temperature from "./components/temperature/Temperature";
import Reports from "./components/reports/Reports";
import Download from "./components/download/Download";
import WeeklyStats from "./components/weeklyStats/WeeklyStats";
import WeeklyInfo from "./components/weeklyInfo/WeeklyInfo";
import Machine from "./components/machine/Machine";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Core>
        <Temperature />
        <Reports />
        <Download />
        <WeeklyStats />
        <WeeklyInfo />
        <Machine />
      </Core>
    </div>
  );
}

export default App;
