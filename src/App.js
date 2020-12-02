import React from "react";
import "./App.css";
import AddAlarm from "./components/AddAlarm";
import Alarms from "./components/Alarms";

function App() {
    return (
        <div>
            <Alarms />
            <AddAlarm />
        </div>
    );
}

export default App;
