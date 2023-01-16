import { useState } from "react";
import ItemRoutine from "../layout/ItemRoutine";
import "./AddRoutineStyle.css";

function AddRoutine(props) {
  const tasks = [];
  let valorE = "";
  let i = 0;

  function handleName(e) {
    valorE = e.target.value;
  }

  function handleClick(e) {
    e.preventDefault();

    if (valorE == "") {
      alert("Escreva algo");
    } else {
      tasks.push(valorE);
      console.log(tasks);
      i++;
    }
  }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form>
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input type="number" id="taskHour" />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input type="text" id="taskName" onChange={handleName} />
          <button className="addTask" onClick={handleClick}>
            Adicionar
          </button>
        </fieldset>
      </form>
    
    </>
  );
}

export default AddRoutine;
