import React from "react";
import { Link } from "react-router-dom";

const Alarms = (props) => {
    return (
        <div>
            <h2>Alarms</h2>
            <Link to="/addAlarm">
                <button>+</button>
            </Link>
        </div>
    );
};

export default Alarms;
