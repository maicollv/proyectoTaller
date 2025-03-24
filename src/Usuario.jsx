import { useState } from "react";

function Usuario() {
  const [usuario] = useState({
    nombre: "York",
    edad: 37,
    carrera: "programación",
  });

  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(true)}>Mostrar</button>
      {mostrar && (
        <div>
          <h4>Nombre: {usuario.nombre}</h4>
          <h4>Edad: {usuario.edad}</h4>
          <h4>Carrera: {usuario.carrera}</h4>
        </div>
      )}
    </div>
  );
}

export default Usuario;
