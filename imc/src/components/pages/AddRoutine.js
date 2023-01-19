import { useEffect, useState } from "react";
import "./AddRoutineStyle.css";
import { BiTrash } from "react-icons/bi";

let nextKey = 0;

function AddRoutine() {
  const [nameTask, setNTask] = useState();
  const [timeTask, setTTask] = useState();
  const [task, setTask] = useState({
    hourTask: null,
    id: null,
  });

  function localAdd(e) {
    e.preventDefault();
    if (timeTask === "" || nameTask === "") {
      alert("Digite algo");
    } else if (timeTask > 24 || timeTask < 0) {
      alert("Digite o horário certo (00h até 23h)");
    } else if (timeTask === undefined || nameTask === undefined) {
      alert("Digite algo");
    } else {
      localStorage.setItem(nameTask, JSON.stringify(timeTask));
      let time = JSON.parse(localStorage.getItem(nameTask));
      time = Number(time);
      // console.log(time);
      nextKey++;

      e.preventDefault();
      setTask({
        ...task,
        id: nextKey,
        hourTask: time,
      });
      setTTask("");
      setNTask("");
      // alert(`Sua tarefa (${nameTask}) inicia as ${timeTask}h`);
      // const timer = setTimeout(() => {
      //   console.log("A hora é " + task.hourTask);
      // }, 5000);
      // console.log(timer)
    }
  }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form>
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input
            type="number"
            id="taskHour"
            value={timeTask}
            onChange={(e) => setTTask(e.target.value)}
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
      {task.hourTask}
    </>
  );
}

export default AddRoutine;
