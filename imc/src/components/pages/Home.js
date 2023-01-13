import { Link } from "react-router-dom";
import FDate from "../layout/Relogio";
import "./HomeStyle.css";

function Home() {
  return (
    <>
      <FDate />
      <div className="main">
        <h1>
          Organize ou crie a<strong>SUA</strong> rotina
        </h1>
        <div className="text">
          <p>
            A criação de uma rotina é uma parte muito importante para pessoas
            que querem uma vida produtiva e disciplinada. Além de produtividade
            aumentada, uma rotina ajuda até também em criação e disponibilidade
            de tempo
          </p>
        </div>
        <div className="button">
          <Link to={"/AddRoutine"}>
            <button className="addRoutine">Crie sua rotina</button>
          </Link>
        </div>
      </div>
      <footer className="footerDiv">
        Faça o teste e verá como uma rotina ajuda no seu dia a dia
      </footer>
    </>
  );
}

export default Home;
