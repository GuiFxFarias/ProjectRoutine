import { useEffect, useState } from "react";

function PopMessage({ msg }) {
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (!msg) {
      setMessage(false);
      return;
    }

    setMessage(true);

    const timer = setTimeout(() => {
      setMessage(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{message && <h1>Adicione a tarefa</h1>}</>;
}

export default PopMessage;
