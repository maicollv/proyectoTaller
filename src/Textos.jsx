import { useState } from "react";

function Textos() {
  const [textos, setTextos] = useState([
    "Hola este es el primer texto",
    "Como estas 2do texto",
    "estamos programando 3er texto",
  ]);

  const cambiarTextos = () => {
    setTextos([
      "Este es un buen trabajo",
      "de programacion en react",
      "merezco una buena nota :)",
    ]);
  };

  return (
    <div>
      <p>{textos[0]}</p>
      <p>{textos[1]}</p>
      <p>{textos[2]}</p>
      <button onClick={cambiarTextos}>Cambiar Textos</button>
    </div>
  );
}

export default Textos;
