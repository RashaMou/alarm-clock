import React from "react";
import { Link } from "react-router-dom";

const Alarms = (props) => {
    // const handleToggle = (alarm) => {
    //     axios
    //         .put(`http://shaxpi:5000/alarms/${alarm.id}`, {
    //             active: !alarm.active,
    //         })
    //         .then((res) => {
    //             console.log(res.data);
    //             props.setAlarms(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div>
            <h2 className="alarms-title">Alarms</h2>
            {props.alarms?.map((alarm) => {
                return (
                    <div key={alarm.id} className="alarm-toggle">
                        <div className="time-label">
                            <div className="time">
                                <span>{alarm.hour}</span>
                                <span>:</span>
                                <span>{alarm.minutes}</span>
                                <span>{alarm.amPm}</span>
                            </div>
                            <p>{alarm.name}</p>
                        </div>
                        <input
                            type="checkbox"
                            checked={alarm.active}
                            onChange={() => props.handleToggle(alarm)}
                        />
                        <label htmlFor={`react-switch-new`}></label>
                        {/* <ToggleSwitch
                            isOn={alarm.active}
                            handleToggle={() => handleToggle(alarm)}
                        /> */}
                    </div>
                );
            })}

            <Link to="/addAlarm">
                <button className="new-alarm">+</button>
            </Link>
        </div>
    );
};

export default Alarms;
