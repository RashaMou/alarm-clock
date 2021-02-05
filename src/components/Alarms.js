import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Checkbox } from 'primereact/checkbox';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

const Alarms = (props) => {
  const [modal, setModal] = useState(false);
  const [clickedAlarm, setClickedAlarm] = useState(null);

  const handleClick = (alarm) => {
    setClickedAlarm(alarm);
    setModal(!modal);
  };

  return (
    <div>
      <h2 className="alarms-title">Alarms</h2>
      {modal && (
        <DeleteModal
          modal={modal}
          setModal={setModal}
          handleDelete={props.handleDelete}
          alarm={clickedAlarm}
        />
      )}
      {props.alarms?.map((alarm) => {
        return (
          <div key={alarm.id} className="alarm-toggle">
            <div className="time-label" onClick={() => handleClick(alarm.id)}>
              <div className="time">
                <span>
                  {alarm.hour < 10 ? (
                    <span className="times">0{alarm.hour}</span>
                  ) : (
                    <span className="times">{alarm.hour}</span>
                  )}
                </span>
                <span>:</span>
                {alarm.minutes < 10 ? (
                  <span className="times">0{alarm.minutes}</span>
                ) : (
                  <span className="times">{alarm.minutes}</span>
                )}

                <span className="times"> {alarm.amPm}</span>
              </div>
              <p className="alarm-name">{alarm.name}</p>
            </div>
            <Checkbox onChange={() => props.handleToggle(alarm)} checked={alarm.active}></Checkbox>
          </div>
        );
      })}

      <Link to="/addAlarm">
      <FontAwesomeIcon icon={faPlusCircle} className="new-alarm"/>
      </Link>
    </div>
  );
};

export default Alarms;
