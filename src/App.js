import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AddAlarm from "./components/AddAlarm";
import Alarms from "./components/Alarms";

function App(props) {
    // fetches and displays array of alarms from database

    return (
        <div>
            <Route exact path="/">
                <Alarms />
            </Route>
            <Route exact path="/addAlarm">
                <AddAlarm />
            </Route>
        </div>
    );
}

export default App;
