import React, { useState } from "react";

const AddAlarm = () => {
    const [name, setName] = useState("");
    const [alarm, setAlarm] = useState({
        hour: 0,
        minutes: 0,
        amPm: "am",
    });
    const [repeatedDays, setRepeatedDays] = useState({
        Mon: false,
        Tue: false,
        Wed: false,
        Thu: false,
        Fri: false,
        Sat: false,
        Sun: false,
    });

    const handleChange = (e) => {
        setName(e.target.value);
    };
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    const selectRepeat = (day) => {
        console.log(day);
        setRepeatedDays({
            ...repeatedDays,
            [day]: !repeatedDays[day],
        });
    };

    const hours = Array(12)
        .fill()
        .map((v, i) => ++i);

    const minutes = Array(60)
        .fill()
        .map((v, i) => i);

    const handleSubmit = () => {
        // send setAlarm and repeatedDays to App.justify
    };

    const handleTime = (e) => {
        console.log(e.target.id, ":", e.target.value);
        setAlarm({
            ...alarm,
            [e.target.id]: e.target.value,
        });
    };

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <select name="hour" id="hour" onChange={handleTime}>
                    <option value="alarm.hour">Hour</option>
                    {hours.map((h, idx) => {
                        return (
                            <option key={idx} value={h}>
                                {h}
                            </option>
                        );
                    })}
                </select>
                <select name="minutes" id="minutes" onChange={handleTime}>
                    <option value="">Minutes</option>
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
                <select name="am-pm" id="amPm" onChange={handleTime}>
                    <option value="">am/pm</option>
                    <option value="am">am</option>
                    <option value="pm">pm</option>
                </select>
            </form>
            <h2>Repeat</h2>
            {days.map((day, idx) => {
                return (
                    <span
                        key={idx}
                        onClick={() => selectRepeat(day)}
                        className={`${repeatedDays[day] ? "repeatedDay" : ""}`}
                    >
                        {day}
                    </span>
                );
            })}
            <button type="submit" onClick={handleSubmit}>
                Add
            </button>
        </div>
    );
};

export default AddAlarm;
