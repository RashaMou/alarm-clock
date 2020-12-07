import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import AddAlarm from "./components/AddAlarm";
import Alarms from "./components/Alarms";
import "./styles/index.scss";

function App(props) {
    const [alarms, setAlarms] = useState([]);
    const [active, setActive] = useState(true);
    const handleToggle = (alarm) => {
        axios
            .put(`http://shaxpi:5000/alarms/${alarm.id}`, {
                active: !alarm.active,
            })
            .then((res) => {
                console.log(res.data);
                setActive(!res.data.updatedAlarm.active);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios
            .get("http://shaxpi:5000/alarms")
            .then((res) => {
                console.log(res.data);
                setAlarms(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [active]);
    return (
        <div className="app">
            <Route exact path="/">
                <Alarms
                    alarms={alarms}
                    active={active}
                    handleToggle={handleToggle}
                />
            </Route>
            <Route exact path="/addAlarm">
                <AddAlarm setAlarms={setAlarms} alarms={alarms} />
            </Route>
        </div>
    );
}

export default App;
