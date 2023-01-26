import { BsFillTrashFill } from "react-icons/bs";
import "./RoutineStyle.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { useEffect, useState } from "react";

function Routine() {
  const [task, setTask] = useState([]);

  function addStorage() {
    let values = [];

    let item = Object.keys(localStorage);

    let itens;
    let n = 0;

    item.map((chave) => {
      itens = {
        id: n++,
        key: chave.toLowerCase(),
        value: String(JSON.parse(localStorage.getItem(chave))),
      };
      values.push(itens);
    });

    values.sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0));

    setTask(values);
  }

  useEffect(() => {
    addStorage();
  }, []);

  function handleClick(e) {
    const element = e.target.value;

    task.map((a) => {
      if (element == a.key) {
        localStorage.removeItem(element);
        toast("Item removido !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
    addStorage();
  }

  function SortArrayName() {
    return (
      <>
        <ul className="listName">
          {task.map((a, i) => (
            <li className="itensN" key={i}>
              {a.key}
            </li>
          ))}
        </ul>
        <ul className="listHour">
          {task.map((a, i) => (
            <li className="itensR" key={i}>
              {a.value.replace(".", "h")}
              <button
                className="delete"
                value={a.key}
                key={i}
                onClick={handleClick}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function TimeTask() {
    const [nameOne, setNameOne] = useState("");
    const [nameTwo, setNameTwo] = useState("");

    function handleCalc(e) {
      e.preventDefault();
      let timeOne = 0;
      let timeTwo = 0;

      let ms = 0;

      let segundos = (ms / 1000) % 60; // se não precisar de segundos, basta remover esta linha.
      let minutos = (ms / 60000) % 60; // 60000   = 60 * 1000
      let horas = ms / 3600000; // 3600000 = 60 * 60 * 1000
      let dias = ms / 86400000;

      setNameOne(nameOne.toLowerCase());
      setNameTwo(nameTwo.toLowerCase());

      task.map((a) => {
        if (a.key == nameOne) {
          timeOne = a.value;
        }
        if (a.key == nameTwo) {
          timeTwo = a.value;
        }
      });
      console.log(timeOne);

      // if (timeOne < timeTwo) {
      //   let time = timeTwo - timeOne;
      //   toast(`Voce tem ${time}h de uma tarefa para outra`, {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // } else {
      //   toast(`Coloque primeiro a tarefa mais cedo`, {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: false,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // }
    }

    return (
      <>
        <h1>
          <button onClick={handleCalc}>Clique Aq</button>
        </h1>
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
            <button className="addTask" onClick={handleCalc}>
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
