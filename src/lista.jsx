import { useState } from "react";

function Usuario() {
  const [usuarios] = useState([
    { Id: 1, nombre: "York", edad: 37, carrera: "Programación" },
    { Id: 2, nombre: "Ana", edad: 25, carrera: "Diseño Gráfico" },
    { Id: 3, nombre: "Carlos", edad: 30, carrera: "Ingeniería" },
  ]);

  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar Lista</button>
      {mostrar && (
        <div>
          <p>
            ID: {usuarios[0].Id} - Nombre: {usuarios[0].nombre} - Edad:{" "}
            {usuarios[0].edad} - Carrera: {usuarios[0].carrera}
          </p>
          <p>
            ID: {usuarios[1].Id} - Nombre: {usuarios[1].nombre} - Edad:{" "}
            {usuarios[1].edad} - Carrera: {usuarios[1].carrera}
          </p>
          <p>
            ID: {usuarios[2].Id} - Nombre: {usuarios[2].nombre} - Edad:{" "}
            {usuarios[2].edad} - Carrera: {usuarios[2].carrera}
          </p>
        </div>
      )}
    </div>
  );
}

export default Usuario;
