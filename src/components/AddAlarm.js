import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddAlarm = (props) => {
    const [error, setError] = useState("");
    const [alarm, setAlarm] = useState({
        name: "",
        hour: 0,
        minutes: 0,
        amPm: "am",
        repeatedDays: {
            Mon: false,
            Tue: false,
            Wed: false,
            Thu: false,
            Fri: false,
            Sat: false,
            Sun: false,
        },
    });

    const handleChange = (e) => {
        setAlarm({ ...alarm, name: e.target.value });
    };
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const selectRepeat = (day) => {
        console.log(day);
        setAlarm({
            ...alarm,
            repeatedDays: {
                ...alarm.repeatedDays,
                [day]: !alarm.repeatedDays[day],
            },
        });
    };

    const hours = Array(12)
        .fill()
        .map((v, i) => ++i);

    const getMins = () => {
        let mins = new Array(10);

        for (let i = 0; i < 60; i += 5) {
            mins[i] = i;
        }
        return mins;
    };

    const minutes = getMins();

    const handleTime = (e) => {
        if (e.target.id === "hour" && e.target.value > 0) {
            setError("");
        }
        setAlarm({
            ...alarm,
            [e.target.id]: e.target.value,
        });
    };

    const submitAlarm = () => {
        if (alarm.hour === 0) {
            setError("Please set the hour");
        } else {
            console.log(alarm);
            // submit to database
        }
    };

    return (
        <div>
            <Link to="/">
                <button className="back-button">&#8249;</button>
            </Link>
            {error ? <p>{error}</p> : null}
            <form className="form">
                <label for="alarm-label" className="alarm-label-title">
                    Alarm Label
                </label>
                <input
                    type="text"
                    id="alarm-label"
                    onChange={handleChange}
                    className="input-box"
                />
                <div className="selects">
                    <select
                        name="hour"
                        id="hour"
                        onChange={handleTime}
                        className="select"
                    >
                        <option value={0}>00</option>
                        {hours.map((h, idx) => {
                            if (h < 10) {
                                return (
                                    <option key={idx} value={h}>
                                        0{h}
                                    </option>
                                );
                            }
                            return <option value={h}>{h}</option>;
                        })}
                    </select>
                    <span className="colon">:</span>
                    <select
                        name="minutes"
                        id="minutes"
                        onChange={handleTime}
                        className="select select-minutes"
                    >
                        {minutes.map((m, idx) => {
                            if (m < 10) {
                                return (
                                    <option key={idx} value={m}>
                                        0{m}
                                    </option>
                                );
                            }
                            return <option value={m}>{m}</option>;
                        })}
                    </select>
                    <select
                        name="am-pm"
                        id="amPm"
                        onChange={handleTime}
                        className="select"
                    >
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </select>
                </div>
            </form>
            <h2 className="repeat-title">Repeat</h2>
            <div className="days">
                {days.map((day, idx) => {
                    return (
                        <span
                            key={idx}
                            onClick={() => selectRepeat(day)}
                            className={`day ${
                                alarm.repeatedDays[day] ? "repeatedDay" : ""
                            }`}
                        >
                            {day}
                        </span>
                    );
                })}
            </div>
            <Link to="/">
                <button onClick={submitAlarm} className="save-button">
                    Save
                </button>
            </Link>
        </div>
    );
};

export default AddAlarm;
