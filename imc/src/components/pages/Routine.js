import { BsFillTrashFill } from "react-icons/bs";
import "./RoutineStyle.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function Routine() {
  let item = Object.keys(localStorage);

  let valus;
  let values = [];
  let n = 0;

  item.map((chave, i) => {
    valus = {
      id: n++,
      key: chave,
      value: Number(JSON.parse(localStorage.getItem(chave))),
    };
    values.push(valus);
  });

  values.sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0));

  const notify = () => toast("Item removido !");

  function handleClick(e) {
    const element = e.target.value;

    values.map((valor) => {
      if (valor.key == element) {
        // console.log("Key: " + valor.key);

        values.filter((filtered) => {
          if (filtered.key == element) {
            localStorage.removeItem(filtered.key);
            toast("Item removido !", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              document.location.reload();
            }, 2200);
          }
        });
      }
    });
  }

  function SortArrayName() {
    return (
      <>
        <ul className="listName">
          {values.map((a, i) => (
            <li className="itensN" key={i}>
              {a.key}
            </li>
          ))}
        </ul>
        <ul className="listHour">
          {values.map((a, i) => (
            <li className="itensR" key={i}>
              {a.value}
              <button className="delete" value={a.key} onClick={handleClick}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  function HandleList() {
    return (
      <div className="backList">
        <SortArrayName />
      </div>
    );
  }

  return (
    <>
      <h2 className="routine">Sua Rotina</h2>
      <HandleList />
      <ToastContainer />
    </>
  );
}

export default Routine;
