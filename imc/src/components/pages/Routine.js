import { useState } from "react";
import "./RoutineStyle.css";

function Routine() {
  let item = Object.keys(localStorage);
  let values = localStorage.getItem(item);

  function handleClick() {
    console.log(values);
  }

  function HandleList() {
    return (
      <div className="backList">
        {" "}
        <ul className="listHour">
          {item.map((a, i) => (
            <li key={i} className="itensR">
              {a}
            </li>
          ))}
        </ul>
        <ul className="listName"></ul>
      </div>
    );
  }

  return (
    <>
      <h2 className="routine">Sua Rotina</h2>
      <button onClick={handleClick}>Clique</button>
      <HandleList />
    </>
  );
}

export default Routine;
