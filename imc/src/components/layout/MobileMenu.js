import "./MobileStyle.css";

function MobileMenu({ customClass }) {
  return (
    <div className={`categories ${customClass}`}>
      <div className="categoriesItem">Adicionar Agenda</div>
      <div className="categoriesItem">Ver Agendas</div>
      <div className="categoriesItem">Dicas</div>
      <div className="categoriesItem">Configurações</div>
    </div>
  );
}

export default MobileMenu;
