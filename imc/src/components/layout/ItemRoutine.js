function ItemRoutine({ lista }) {
  return (
    <>
      <h1>Tarefa</h1>
      {lista.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}

export default ItemRoutine;
