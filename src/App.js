import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import AddAlarm from "./components/AddAlarm";
import Alarms from "./components/Alarms";
import "./styles/index.scss";

function App(props) {
  const [alarms, setAlarms] = useState([]);
  const [stateChange, setStateChange] = useState(true);

  const handleToggle = (alarm) => {
    axios
      .put(`http://shaxpi:5000/alarms/${alarm.id}`, {
        active: !alarm.active,
      })
      .then((res) => {
        console.log(res.data);
        setStateChange(!stateChange);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (alarm) => {
    axios
      .delete(`http://shaxpi:5000/alarms/${alarm}`)
      .then((res) => {
        setStateChange(!stateChange);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://shaxpi:5000/alarms")
      .then((res) => {
        setAlarms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [stateChange]);

  return (
    <div className="app">
      <Route exact path="/">
        <Alarms
          alarms={alarms}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      </Route>
      <Route exact path="/addAlarm">
        <AddAlarm setAlarms={setAlarms} alarms={alarms} />
      </Route>
    </div>
  );
}

export default App;
