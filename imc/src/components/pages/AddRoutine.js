import { useState } from "react";
import ItemRoutine from "../layout/ItemRoutine";
import "./AddRoutineStyle.css";

function AddRoutine(props) {
  const [task, setTask] = useState([]);

  function handleName(e){
    setTask(e.target.value)
  }

  function handleTask(e) {
    e.preventDefault();
    console.log([task])
  }

  

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form>
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input type="number" id="taskHour" />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input type="text" id="taskName" onChange={handleName}/>
          <button className="addTask" onClick={handleTask}>Adicionar</button>
        </fieldset>
      </form>
      <ItemRoutine lista={task}/>
    </>
  );
}

export default AddRoutine;
