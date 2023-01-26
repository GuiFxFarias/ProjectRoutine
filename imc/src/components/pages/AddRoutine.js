import { useEffect, useRef, useState } from "react";
import "./AddRoutineStyle.css";
import { ToastContainer, toast } from "react-toastify";
import MaskedInput from "react-text-mask";

import "react-toastify/dist/ReactToastify.min.css";

let nextKey = 0;

function AddRoutine() {
  const storage = Object.keys(localStorage);
  const [nameTask, setNTask] = useState();
  const [timeTask, setTTask] = useState();
  const [task, setTask] = useState({
    hourTask: null,
    id: null,
  });
  const [nameTwo, setNameTwo] = useState();

  useEffect(() => {
    setNameTwo(nameTask);
  }, [nameTwo]);

  function localStoAdd() {
    let name = nameTask;

    storage.map((a) => {
      if (nameTask == a) {
        name = nameTask + " Novamente";
        localStorage.setItem(name.toLowerCase(), JSON.stringify(timeTask));
      }
    });
    localStorage.setItem(nameTask.toLowerCase(), JSON.stringify(timeTask));
    let time = JSON.parse(localStorage.getItem(nameTask));
    time = Number(time);
    nextKey++;

    setTask({
      ...task,
      id: nextKey,
      hourTask: time,
    });

    setTTask("");
    setNTask("");
  }

  function handleClick(e) {
    e.preventDefault();
  }

  function localAdd(e) {
    e.preventDefault();

    if (timeTask === "" || nameTask === "") {
      alert("Digite algo");
    } else if (timeTask > 24 || timeTask < 0) {
      alert("Digite o horário certo (00h até 23h)");
    } else if (timeTask === undefined || nameTask === undefined) {
      alert("Digite algo");
    } else {
      localStoAdd();
      toast("Item Adicinado !");
    }
  }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form>
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input
            type="time"
            id="taskHour"
            value={timeTask}
            onChange={(e) => {
              setTTask(e.target.value);
            }}
          />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input
            type="text"
            id="taskName"
            value={nameTask}
            onChange={(e) => setNTask(e.target.value)}
          />
          <button className="addTask" onClick={localAdd}>
            Adicionar
          </button>
        </fieldset>
      </form>
      <ToastContainer />
    </>
  );
}

export default AddRoutine;
