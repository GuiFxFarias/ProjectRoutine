import "./AddRoutineStyle.css";

function AddRoutine() {

  function addTask(e){
    e.preventDefault()

    console.log('click')
  }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form action="">
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input type="number" id="taskHour" />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input type="text" id="taskName" />
          <button className="addTask" onClick={addTask}>Adicionar</button>
        </fieldset>
      </form>
    </>
  );
}

export default AddRoutine;
