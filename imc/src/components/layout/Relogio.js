import { useEffect, useState } from "react";
import "./RelogioStyle.css";

function FDate() {
  const [hour, setHour] = useState("-");
  const [minute, setMinute] = useState("-");
  const [seconds, setSeconds] = useState("-");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const s = now.getSeconds();
      const h = now.getHours();
      const m = now.getMinutes();
      setHour(h);
      setMinute(m);
      setSeconds(s);
    }, 1000);
  });

  const [hourZero, setHourZero] = useState("-");
  const [minuteZero, setMinuteZero] = useState("-");
  const [secondsZero, setSecondsZero] = useState("-");

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const s = now.getSeconds();
      const h = now.getHours();
      const m = now.getMinutes();
      setHourZero("0" + h);
      setMinuteZero("0" + m);
      setSecondsZero("0" + s);
    }, 1000);
  });

  return (
    <>
      <h1 className="watch">
        <ul className="listDate">
          <li className="date">{hour > 9 ? hour : hourZero}</li>
          <li className="date">{minute > 9 ? minute : minuteZero}</li>
          <li className="date ">{seconds > 9 ? seconds : secondsZero}</li>
        </ul>
      </h1>
    </>
  );
}

export default FDate;
