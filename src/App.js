import React, { useState } from "react";
import Header from "./components/header/header";
import Entorno from "./components/body/entorno";
import DiseñoProyecto from "./components/body/diseñoProyecto";
import Bibliografia from "./components/body/bibliografia";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [entorno, setentorno] = useState('block');
  const [diseño, setdiseño] = useState('none');
  const [biblio, setbiblio] = useState('none');

  const showEntorno = () => {
    setentorno('block');
    setdiseño('none')
    setbiblio('none')
  }

  const showDiseño = () => {
    setentorno('none');
    setdiseño('block')
    setbiblio('none')
  }

  const showBiblio = () => {
    setentorno('none');
    setdiseño('none')
    setbiblio('block')
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
              <button className="btn btn-success col-md-12" onClick={() => showEntorno()}>Entorno de MYSQL</button>
            </div>
            <div className="row mt-3">
              <button className="btn btn-success col-md-12" onClick={() => showDiseño()}>Diseño del proyecto</button>
            </div>
            <div className="row mt-3">
              <button className="btn btn-success col-md-12" onClick={() => showBiblio()}>Diseño del proyecto</button>
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
        </div>
      </div>
    </div>
  )
}

export default App;
