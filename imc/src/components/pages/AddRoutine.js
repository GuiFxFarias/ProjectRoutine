import { useState } from "react";
import "./AddRoutineStyle.css";
import { BiTrash } from "react-icons/bi";

let nextId = 0;

function AddRoutine() {
  const [name, setName] = useState();
  const [timeH, setTimeH] = useState();
  const [task, setTask] = useState([]);

  function handleTask(e) {
    if (timeH === "" || name === "") {
      e.preventDefault();
      alert("Digite algo");
    } else if (timeH >= 24 || timeH < 0) {
      alert("Coloque um horário correto");
      e.preventDefault();
      setTimeH("");
    } else {
      e.preventDefault();
      setTask([
        ...task,
        {
          id: nextId++,
          time: timeH,
          name: name,
        },
      ]);
      setName("");
      setTimeH("");
    }
  }

  // function handleFilter(e) {
  //   e.preventDefault();
  //   artists.map((artist) => {
  //     setArtists(artists.filter((a) => a.id !== artist.id));
  //   });
  // }

  return (
    <>
      <h1>Crie sua rotina</h1>
      <form>
        <fieldset className="listInputs">
          <label htmlFor="taskHour">Informe a hora de sua tarefa</label>
          <input
            type="number"
            id="taskHour"
            value={timeH}
            onChange={(e) => setTimeH(e.target.value)}
          />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input
            type="text"
            id="taskName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="addTask" onClick={handleTask}>
            Adicionar
          </button>
        </fieldset>
      </form>
      <ul className="listTodo">
        {task.map((artist) => (
          <div className="divTodo">
            <li className="timeTodo" key={artist.id}>
              Horário: {artist.time}
            </li>
            <li key={artist.id} className="itemTodo">
              {artist.name}{" "}
              <button
                onClick={() => {
                  setTask(task.filter((a) => a.id !== artist.id));
                }}
              >
                <BiTrash />
              </button>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default AddRoutine;
