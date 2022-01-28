import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import diseñoBD5 from '../../recursos/Avances5.png';
import { dataCompras, dataAlmacen, dataInventarios, DiseñoBaseDatos } from '../../variables/variables';
const DiseñoProyecto = () => {

    const [avances, setAvances] = useState("block")
    const [descripcion, setDescripcion] = useState("none")

    const showDescripcion = () => {
        setAvances("none");
        setDescripcion("block");
    }

    const showAvances = () => {
        setAvances("block");
        setDescripcion("none");
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <button className="btn btn-primary col-md-3 m-3" onClick={showAvances}>Avances</button>
                <button className="btn btn-primary col-md-3 m-3" onClick={showDescripcion}>Descripción</button>
            </div>
            <div className="row">
                <div style={{ display: descripcion }}>
                    <h3>Compras</h3>
                    <ul>
                        {dataCompras.map((dat) => (<li>{dat}</li>))}
                    </ul>
                    <h3>Almacen</h3>
                    <ul>
                        {dataAlmacen.map((dat) => (<li>{dat}</li>))}
                    </ul>
                    <h3>Inventario</h3>
                    <ul>
                        {dataInventarios.map((dat) => (<li>{dat}</li>))}
                    </ul>
                </div>
                <div style={{ display: avances }}>
                    <h3 className="text-center">Diseño de la base de datos</h3>
                    <DiseñoBaseDatos />
                    <h3 className="text-center">Avance en el diseño de clases</h3>
                    <img src={diseñoBD5} className="d-block w-100" />
                </div>
            </div>
        </div>
    )
}
export default DiseñoProyecto;