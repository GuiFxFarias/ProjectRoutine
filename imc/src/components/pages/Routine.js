import { BsFillTrashFill } from "react-icons/bs";
import "./RoutineStyle.css";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import { useEffect, useState } from "react";

function Routine() {
  // let item = Object.keys(localStorage);

  // let itens;
  // let values = [];
  // let n = 0;

  // item.map((chave) => {
  //   itens = {
  //     id: n++,
  //     key: chave.toLowerCase(),
  //     value: Number(JSON.parse(localStorage.getItem(chave))),
  //   };
  //   values.push(itens);
  // });

  // values.sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0));

  const [task, setTask] = useState([]);

  function handleClick(e) {
    const element = e.target.value;

    console.log(task);
  }

  function SortArrayName() {
    return (
      <>
        <ul className="listName">
          <li className="itensN"></li>
        </ul>
        <ul className="listHour">
          <li className="itensR"></li>
        </ul>
      </>
    );
  }

  function TimeTask() {
    const [nameOne, setNameOne] = useState();
    const [nameTwo, setNameTwo] = useState();

    function handleCalc(e) {
      // e.preventDefault();
      // let timeOne = 0;
      // let timeTwo = 0;
      // if (nameOne > nameTwo) {
      //   values.filter((item) => {
      //     if (item.key == nameOne) {
      //       timeOne = item.value;
      //     }
      //     if (item.key == nameTwo) {
      //       timeTwo = item.value;
      //     }
      //   });
      //   let time = timeTwo - timeOne;
      //   toast(`Voce tem ${time}h de uma tarefa para outra`, {
      //     position: "top-center",
      //     autoClose: 5000,
      //     hideProgressBar: false,
      //     closeOnClick: true,
      //     pauseOnHover: true,
      //     draggable: true,
      //     progress: undefined,
      //     theme: "light",
      //   });
      // } else {
      //   alert(
      //     "Coloque as tarefas em ordens, sendo a primeira tarefa, a mais cedo"
      //   );
      // }
    }

    function calcTime(e) {
      e.preventDefault();

      return (
        <>
          <h1>Time now</h1>
        </>
      );
    }

    return (
      <>
        <h2 className="tittleCalc">Calcule o tempo em cada tarefa</h2>
        <div className="instructions">
          Se voce quiser saber quanto tempo tem de uma tarefa para outra, insira
          os nome das tarefas que deseja
        </div>
        <form>
          <fieldset className="questionHour">
            <label htmlFor="task">Insira a primeira tarefa</label>
            <input
              type="text"
              id="task"
              value={nameOne}
              onChange={(e) => setNameOne(e.target.value)}
            />
            <label htmlFor="secTask">Insira a segunda tarefa</label>
            <input
              type="text"
              id="secTask"
              value={nameTwo}
              onChange={(e) => setNameTwo(e.target.value)}
            />
            <button className="addTask">Vizualiar</button>
          </fieldset>
        </form>
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
      <TimeTask />
      <button onClick={handleClick}>Clica</button>
      <h2 className="routine">Sua Rotina</h2>
      <HandleList />
      <ToastContainer />
    </>
  );
}

export default Routine;

// toast("Item removido !", {
//     position: "top-right",
//     autoClose: 1000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "light",
//   });
