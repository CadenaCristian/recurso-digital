import React from "react";
import { TableAlmacen, TableArea, TableArticulo, TableCargo, TableCotizaciones, TableEmpleado, TableFactura, TableOrdenCompra, TableProveedor, TableSolicitudes, TableTransaccionInterna } from "../../variables/variables";

const Diccionario = () => {
    return (
        <div>
            <TableEmpleado />
            <TableCargo />
            <TableArea />
            <TableSolicitudes />
            <TableCotizaciones />
            <TableAlmacen />
            <TableArticulo />
            <TableTransaccionInterna />
            <TableProveedor />
            <TableOrdenCompra />
            <TableFactura />
        </div>
    )
}

export default Diccionario;