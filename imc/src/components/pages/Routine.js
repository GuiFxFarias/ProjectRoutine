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
    console.log(task);
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
      let timeHour = 0;
      let timeMinute = 0;

      setNameOne(nameOne.toLowerCase());
      setNameTwo(nameTwo.toLowerCase());

      const date = new Date();

      let OnehourTask;
      let OneminuteTask;

      let TwohourTask;
      let TwominuteTask;

      const year = date.getFullYear();
      const monthDate = date.toLocaleString("default", { month: "long" });
      const day = date.getDate();

      const hour = date.getHours(OnehourTask);
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const miliSecond = date.getMilliseconds(hour);

      task.map((a) => {
        if (a.key == nameOne) {
          OnehourTask = a.value;
          OnehourTask = OnehourTask.slice(0, OnehourTask.length - 3);

          OneminuteTask = a.value;
          OneminuteTask = OneminuteTask.slice(3, OneminuteTask.lenght);
        }
        if (a.key == nameTwo) {
          TwohourTask = a.value;
          TwohourTask = TwohourTask.slice(0, TwohourTask.length - 3);

          TwominuteTask = a.value;
          TwominuteTask = TwominuteTask.slice(3, TwominuteTask.length - 3);
        }
      });

      const newDate1 = new Date(
        `${monthDate} ${day}, ${year} ${OnehourTask}:${OneminuteTask}:${second}:${miliSecond}`
      );
      const newDate2 = new Date(
        `${monthDate} ${day}, ${year} ${TwohourTask}:${TwominuteTask}:${second}:${miliSecond}`
      );

      const ms = newDate2 - newDate1;

      let s = ms / 1000;
      let m = 0;
      let h = 0;

      while (s > 59) {
        s -= 60;
        m++;
      }

      while (m > 59) {
        m -= 60;
        h++;
      }

      toast(`Você tem ${h}h${m} entre uma tarefa e outra`, {
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

    return (
      <>
        <h1></h1>
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
