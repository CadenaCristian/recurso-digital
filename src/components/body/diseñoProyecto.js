import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataCompras, dataAlmacen, dataInventarios } from '../../variables/variables';
const DiseñoProyecto = () => {

    const [compras, setCompras] = useState(true);
    const [almacen, setAlmacen] = useState(false);
    const [inventario, setInventario] = useState(false)
    const [comprasCont, setComprasCont] = useState('block');
    const [inventarioCont, setInventarioCont] = useState('none');
    const [ejecuCont, setejecuCont] = useState('none');

    const showCompras = () => {
        setCompras(true);
        setAlmacen(false);
        setInventario(false);
        setComprasCont('block');
        setInventarioCont('none');
        setejecuCont('none');
    }

    const showAlmacen = () => {
        setCompras(false);
        setAlmacen(true);
        setInventario(false);
        setComprasCont('none');
        setInventarioCont('block');
        setejecuCont('none');
    }

    const showInventario = () => {
        setCompras(false);
        setAlmacen(false);
        setInventario(true);
        setComprasCont('none');
        setInventarioCont('none');
        setejecuCont('block');
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <button className="btn btn-primary col-md-3 m-3" onClick={showCompras} disabled={compras}>Compras</button>
                <button className="btn btn-primary col-md-3 m-3" onClick={showAlmacen} disabled={almacen}>Almacen</button>
                <button className="btn btn-primary col-md-3 m-3" onClick={showInventario} disabled={inventario}>Inventario</button>
            </div>
            <div className="row">
                <div style={{ display: comprasCont }}>
                    <ul>
                        {dataCompras.map((dat) => (<li>{dat}</li>))}
                    </ul>
                </div>
                <div style={{ display: inventarioCont }}>
                    <ul>
                        {dataAlmacen.map((dat) => (<li>{dat}</li>))}
                    </ul>
                </div>
                <div style={{ display: ejecuCont }}>
                    <ul>
                        {dataInventarios.map((dat) => (<li>{dat}</li>))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default DiseñoProyecto;