import { BsFillTrashFill } from "react-icons/bs";
import "./RoutineStyle.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { useState } from "react";

function Routine() {
  let item = Object.keys(localStorage);

  let valus;
  let values = [];
  let n = 0;

  item.map((chave, i) => {
    valus = {
      id: n++,
      key: chave.toLowerCase(),
      value: Number(JSON.parse(localStorage.getItem(chave))),
    };
    values.push(valus);
  });

  values.sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0));

  function handleClick(e) {
    const element = e.target.value;

    values.map((valor) => {
      if (valor.key == element) {
        // console.log("Key: " + valor.key);

        values.filter((filtered) => {
          if (filtered.key == element) {
            localStorage.removeItem(filtered.key);
            toast("Item removido !", {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              document.location.reload();
            }, 1500);
          }
        });
      }
    });
  }

  function SortArrayName() {
    return (
      <>
        <ul className="listName">
          {values.map((a, i) => (
            <li className="itensN" key={i}>
              {a.key}
            </li>
          ))}
        </ul>
        <ul className="listHour">
          {values.map((a, i) => (
            <li className="itensR" key={i}>
              {a.value}
              <button className="delete" value={a.key} onClick={handleClick}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function TimeTask() {
    const [nameOne, setNameOne] = useState();
    const [nameTwo, setNameTwo] = useState();

    const [timeOne, setTimeOne] = useState();
    const [timeTwo, setTimeTwo] = useState();

    function handleCalc(e) {
      e.preventDefault();

      let time;

      if (nameOne < nameTwo) {
        values.filter((item) => {
          if (item.key == nameOne) {
            setTimeOne(item.value);
          }
          if (item.key == nameTwo) {
            setTimeTwo(item.value);
          }
        });

        time = timeTwo - timeTwo;
        console.log(values);
      } else {
        alert(
          "Coloque as tarefas em ordens, sendo a primeira tarefa, a mais cedo"
        );
      }
      alert(`De uma tarefa para outra voce tem ${time}`);
    }

    function calcTime(e) {
      e.preventDefault();

      return (
        <>
          <h1>Time now</h1>
        </>
      );
    }

    return (
      <>
        <h2 className="tittleCalc">Calcule o tempo em cada tarefa</h2>
        <div className="instructions">
          Se voce quiser saber quanto tempo tem de uma tarefa para outra, insira
          os nome das tarefas que deseja
        </div>
        <form>
          <fieldset className="questionHour">
            <label htmlFor="task">Insira a primeira tarefa</label>
            <input
              type="text"
              id="task"
              value={nameOne}
              onChange={(e) => setNameOne(e.target.value)}
            />
            <label htmlFor="secTask">Insira a segunda tarefa</label>
            <input
              type="text"
              id="secTask"
              value={nameTwo}
              onChange={(e) => setNameTwo(e.target.value)}
            />
            <button onClick={handleCalc} className="addTask">
              Vizualiar
            </button>
          </fieldset>
        </form>
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
      <TimeTask />
      <h2 className="routine">Sua Rotina</h2>
      <HandleList />
      <ToastContainer />
    </>
  );
}

export default Routine;
