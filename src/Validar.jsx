import { useState } from "react";

function Validar() {
  const [numero, setNumero] = useState("");
  const [mensaje, setMensaje] = useState("");

  const validarNumero = () => {
    const num = parseFloat(numero);
    let nuevoMensaje;
    if (num > 10) {
      nuevoMensaje = "El numero es mayor que 10";
    } else if (num < 10) {
      nuevoMensaje = "El numero es menor que 10";
    } else if (num === 10) {
      nuevoMensaje = "El numero es 10";
    } else {
      nuevoMensaje = "digite un numero";
    }
    setMensaje(nuevoMensaje);
  };

  return (
    <div>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingrese un numero"
      />
      <button onClick={validarNumero}>Validar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default Validar;
