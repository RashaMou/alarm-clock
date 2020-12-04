import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import AddAlarm from "./components/AddAlarm";
import Alarms from "./components/Alarms";
import "./styles/index.scss";

function App(props) {
    const [alarms, setAlarms] = useState([]);

    useEffect(() => {
        axios
            .get("http://shaxpi:3000/alarms")
            .then((res) => {
                setAlarms(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="app">
            <Route exact path="/">
                <Alarms alarms={alarms} />
            </Route>
            <Route exact path="/addAlarm">
                <AddAlarm setAlarms={setAlarms} alarms={alarms} />
            </Route>
        </div>
    );
}

export default App;
