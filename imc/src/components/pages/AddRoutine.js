import "./AddRoutineStyle.css";

function AddRoutine() {
  return (
    <>
      <h1>Cria sua rotina</h1>
      <form action="">
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input type="text" id="taskHour" />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input type="text" id="taskName" />
          <button className="addTask">Adicionar</button>
        </fieldset>
      </form>
    </>
  );
}

export default AddRoutine;
