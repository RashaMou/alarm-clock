import React from "react";

const ToggleSwitch = ({ isOn, handleToggle }) => {
    return (
        <>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                checked={isOn}
                onChange={handleToggle}
            />
            <label className="react-switch-label" htmlFor={`react-switch-new`}>
                <span className={`react-switch-button`} />
            </label>
        </>
    );
};

export default ToggleSwitch;
