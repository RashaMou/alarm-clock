import React from "react";
import { Route } from "react-router-dom";
import AddAlarm from "./components/AddAlarm";
import Alarms from "./components/Alarms";
import "./styles/index.scss";

function App(props) {
    // fetches and displays array of alarms from database

    return (
        <div className="app">
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
