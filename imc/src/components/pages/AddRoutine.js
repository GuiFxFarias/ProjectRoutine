import { useState } from "react";
import "./AddRoutineStyle.css";
import { BiTrash } from "react-icons/bi";

let nextId = 0;
let nextIdH = 0;

function AddRoutine(props) {
  const [name, setName] = useState();
  const [artists, setArtists] = useState([]);

  function handleTask(e) {
    e.preventDefault();
    setName("");
    setArtists([
      ...artists,
      {
        id: nextId++,
        name: name,
      },
    ]);
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
          <input type="number" id="taskHour" />
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
        {artists.map((artist) => (
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
        ))}
      </ul>
    </>
  );
}

export default AddRoutine;

{
  /* {artists.map((item) => (
  <div key={item.id}>{item.name}</div>
))} */
}
