import { useState } from "react";
import "./App.css";
import Color from "./Color";
import Textos from "./Textos";
import Validar from "./Validar";
import Usuario from "./Usuario";
import Lista from "./lista";

function App() {
  return (
    <>
      <Color />
      <Textos />
      <Validar />
      <Usuario />
      <Lista />
    </>
  );
}

export default App;
