import { createMemoryHistory } from "@remix-run/router";
import "./RoutineStyle.css";

function Routine() {
  let item = Object.keys(localStorage);

  function handleClick() {
    let valus;
    let itens = [];

    item.map((a) => {
      valus = { key: a, value: Number(JSON.parse(localStorage.getItem(a))) };
      // valus.set(`${a}`, Number(JSON.parse(localStorage.getItem(a))));
      itens.push(valus);
    });
  }

  function SortArrayName() {
    return (
      <>
        <ul className="listName">
          {item.map((a, i) => (
            <li className="itensN" key={i}>
              {a}
            </li>
          ))}
        </ul>
        <ul className="listHour">
          {item.map((a, i) => (
            <li className="itensR" key={i}>
              {JSON.parse(localStorage.getItem(a))}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function HandleList() {
    return (
      <div className="backList">
        <SortArrayName />
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
