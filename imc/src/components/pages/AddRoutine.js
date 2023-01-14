import { useState } from "react";
import "./AddRoutineStyle.css";

function AddRoutine() {
  const [task, setTask] = useState();

  const taskObj = [
    {
      id: Number,
      name: String,
      hour: Number,
    },
  ];

  function addTask(e) {
    e.preventDefault();

    taskObj.push()
  }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form action="">
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input type="number" id="taskHour" />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input
            type="text"
            id="taskName"
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="addTask" onClick={addTask}>
            Adicionar
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default AddRoutine;
