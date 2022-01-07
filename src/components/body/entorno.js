import React from "react";
import { Introducción, Instalacion, Ejecucion } from "../../variables/variables";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react/cjs/react.development";

const Entorno = () => {

    const [intro, setintro] = useState(true);
    const [install, setinstall] = useState(false);
    const [ejecu, setejecu] = useState(false)
    const [introCont, setintroCont] = useState('block');
    const [installCont, setinstallCont] = useState('none');
    const [ejecuCont, setejecuCont] = useState('none');

    const Intro = () => {
        setintroCont('block');
        setinstallCont('none');
        setejecuCont('none')
        setintro(true);
        setinstall(false);
        setejecu(false)
    }

    const Install = () => {
        setintroCont('none');
        setinstallCont('block');
        setejecuCont('none')
        setintro(false);
        setinstall(true);
        setejecu(false)
    }

    const Ejecu = () => {
        setintroCont('none');
        setinstallCont('none');
        setejecuCont('block')
        setintro(false);
        setinstall(false);
        setejecu(true)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <button className="btn btn-primary col-md-3 m-3" disabled={intro} onClick={() => Intro()}>Introducción</button>
                <button className="btn btn-primary col-md-3 m-3" disabled={install} onClick={() => Install()}>Instalación</button>
                <button className="btn btn-primary col-md-3 m-3" disabled={ejecu} onClick={() => Ejecu()}>Ejecución Mysql PowerShell</button>
            </div>
            <div className="row">
                <div style={{ display: introCont }}>
                    <Introducción />
                </div>
                <div style={{ display: installCont }}>
                    <Instalacion />
                </div>
                <div style={{ display: ejecuCont }}>
                    <Ejecucion />
                </div>
            </div>
            {/* <b>Instalación de Mysql Comunity</b> <br />
            <Instalacion /> */}
        </div>
    )
}
export default Entorno;