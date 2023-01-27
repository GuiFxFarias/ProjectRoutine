import { Link } from "react-router-dom";
import "./MobileStyle.css";

function MobileMenu() {
  return (
    <ul className={`categories`}>
      <li className="categoriesItem">
        <Link to={"/AddRoutine"}>Adicionar Rotina</Link>
      </li>
      <li className="categoriesItem">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="categoriesItem">
        <Link to={"/Routine"}>Ver Rotina</Link>
      </li>
    </ul>
  );
}

export default MobileMenu;
