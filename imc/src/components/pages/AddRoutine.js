import { useState } from "react";
import "./AddRoutineStyle.css";
import { BiTrash } from "react-icons/bi";

let nextId = 0;

function AddRoutine() {
  const [name, setName] = useState();
  const [time, setTime] = useState();
  const [artists, setArtists] = useState([]);

  function handleTask(e) {
    if (name === "" || time === "") {
      e.preventDefault()
      alert("Digite algo");
    } else {
      e.preventDefault();
      setName("");
      setTime("")
      setArtists([
        ...artists,
        {
          id: nextId++,
          time: time,
          name: name,
        },
      ]);
      console.log(time.time)
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
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <label htmlFor="taskName">Informe sua tarefa</label>
          <input
            type="text"
            id="taskName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="addTask" onClick={handleTask} onClickCapture>
            Adicionar
          </button>
        </fieldset>
      </form>
      <ul className="listTodo">
        {artists.map((artist) => (
          <div className="divTodo">
            <li className="timeTodo" key={artist.id}>{artist.time}h:</li>
            <li key={artist.id} className="itemTodo">
              {artist.name}{" "}
              <button
                onClick={() => {
                  setArtists(artists.filter((a) => a.id !== artist.id));
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
