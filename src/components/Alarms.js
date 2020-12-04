import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Alarms = () => {
    const [alarms, setAlarms] = useState([]);

    useEffect(() => {
        axios
            .get("http://shaxpi:3000/alarms")
            .then((res) => {
                setAlarms(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [alarms]);

    return (
        <div>
            <h2 className="alarms-title">Alarms</h2>
            {alarms
                ? alarms.map((alarm) => {
                      return <p key={alarm.id}>{alarm.name}</p>;
                  })
                : null}
            <Link to="/addAlarm">
                <button className="new-alarm">+</button>
            </Link>
        </div>
    );
};

export default Alarms;
