import React from "react";
import { Link } from "react-router-dom";

const Alarms = (props) => {
    return (
        <div>
            <h2 className="alarms-title">Alarms</h2>
            {props.alarms?.map((alarm) => {
                return <p key={alarm.id}>{alarm.name}</p>;
            })}
            <Link to="/addAlarm">
                <button className="new-alarm">+</button>
            </Link>
        </div>
    );
};

export default Alarms;
