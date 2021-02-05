const matches = (currentTime, alarmTime) => {
  const hour = convert(alarmTime);
  return (
    hour === currentTime.getHours() &&
    alarmTime[minutes] === currentTime.getMinutes()
  );
};

export const convert = (alarm) => {
  if (alarm.hour === 12 && alarm.amPm === "am") {
    alarm.hour = 0;
  } else if (alarm.hour === 12 && alarm.amPm === "pm") {
    alarm.hour = 12;
  } else if (alarm.amPm === "pm") {
    alarm.hour = alarm.hour + 12;
  }
  return alarm.hour;
};

const checkAlarmListener = (alarmList) => {
  setInterval(() => {
    const idx = checkAlarms(alarmList);
    if (idx >= 0) {
      alert("It is now time");
    }
  }, 1000);
};
