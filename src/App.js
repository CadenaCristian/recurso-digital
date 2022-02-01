import React, { useState } from "react";
import { Header } from "./variables/variables";
import { Entorno } from "./variables/variables";
import { DiseñoProyecto } from "./variables/variables";
import { Bibliografia } from "./variables/variables";
import { Diccionario } from "./variables/variables";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [entorno, setentorno] = useState('block');
  const [diseño, setdiseño] = useState('none');
  const [biblio, setbiblio] = useState('none');
  const [diccionario, setDiccionario] = useState('none');

  const showEntorno = () => {
    setentorno('block');
    setdiseño('none')
    setbiblio('none')
    setDiccionario('none')
  }

  const showDiseño = () => {
    setentorno('none');
    setdiseño('block')
    setbiblio('none')
    setDiccionario('none')
  }

  const showBiblio = () => {
    setentorno('none');
    setdiseño('none')
    setbiblio('block')
    setDiccionario('none')
  }

  const showDiccionario = () => {
    setentorno('none');
    setdiseño('none')
    setbiblio('none')
    setDiccionario('block')
  }

  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-md-2">
          <div style={{ position: 'fixed' }}>
            <div className="row mt-3">
              <button className="btn btn-success col-md-12" onClick={() => showEntorno()}>Capitulo #1</button>
            </div>
            <div className="row mt-3">
              <button className="btn btn-success col-md-12" onClick={() => showDiseño()}>Capitulo #2</button>
            </div>
            <div className="row mt-3">
              <button className="btn btn-success col-md-12" onClick={() => showBiblio()}>Capitulo #3</button>
            </div>
            <div className="row mt-3">
              <button className="btn btn-success col-md-12" onClick={() => showDiccionario()}>Capitulo #4
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div style={{ display: entorno }}>
            <Entorno />
          </div>
          <div style={{ display: diseño }}>
            <DiseñoProyecto />
          </div>
          <div style={{ display: biblio }}>
            <Bibliografia />
          </div>
          <div style={{ display: diccionario }}>
            <Diccionario />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
