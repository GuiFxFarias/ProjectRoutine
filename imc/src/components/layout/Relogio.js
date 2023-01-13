import { useEffect, useState } from "react";
import "./RelogioStyle.css";

function FDate() {
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [seconds, setSeconds] = useState();

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

  return (
    <>
      <h1 className="watch">
        <ul className="listDate">
          <li className="date">{hour}</li>
          <li className="date">{minute > 9 ? minute : `0${minute}`}</li>
          <li className="date ">{seconds > 9 ? seconds : `0${seconds}`}</li>
        </ul>
      </h1>
    </>
  );
}

export default FDate;
