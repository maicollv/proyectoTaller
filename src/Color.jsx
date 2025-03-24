import { useState } from "react";

function Color() {
  function CambiarFondo() {
    document.body.classList.toggle("azul");
  }
  return <button onClick={CambiarFondo}>Cambiar Fondo</button>;
}
export default Color;
