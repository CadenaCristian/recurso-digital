import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import paso1 from '../recursos/inst_img-1.png';
import paso2 from '../recursos/inst_img-2.png';
import paso3 from '../recursos/inst_img-3.png';
import paso4 from '../recursos/inst_img-4.png';
import paso5 from '../recursos/inst_img-5.png';
import paso6 from '../recursos/inst_img-6.png';
import paso7 from '../recursos/inst_img-7.png';
import paso8 from '../recursos/inst_img-8.png';
import paso9 from '../recursos/inst_img-9.png';
import paso1011 from '../recursos/inst_img-1011.png';
import paso12 from '../recursos/inst_img-12.png';
import paso13 from '../recursos/inst_img-13.png';
import paso14 from '../recursos/inst_img-14.png';
import paso15 from '../recursos/inst_img-15.png';
import paso16 from '../recursos/inst_img-16.png';
import paso17 from '../recursos/inst_img-17.png';
import paso18 from '../recursos/inst_img-18.png';
import paso19 from '../recursos/inst_img-19.png';
import paso20 from '../recursos/inst_img-20.png';
import paso1e from '../recursos/ejecu_img-1.png';
import paso2e from '../recursos/ejecu_img-2.png';
import paso3e from '../recursos/ejecu_img-3.png';
import paso4e from '../recursos/ejecu_img-4.png';
import paso5e from '../recursos/ejecu_img-5.png';
import paso6e from '../recursos/ejecu_img-6.png';
import diseñoBD1 from '../recursos/Avances1.png';
import diseñoBD2 from '../recursos/Avances2.png';
import diseñoBD3 from '../recursos/Avances3.png';
import diseñoBD4 from '../recursos/Avances4.png';
import diseñoBD5 from '../recursos/Avances5.png';
import createTable1 from '../recursos/createTable1.png';
import createTable2 from '../recursos/createTable2.png';
import innerJoin1 from '../recursos/innerJoin1.png';
import innerJoin2 from '../recursos/innerJoin2.png';
import nuestroProyecto1 from '../recursos/nuestroProyecto1.png';
import nuestroProyecto2 from '../recursos/nuestroProyecto2.png';
import nuestroProyecto3 from '../recursos/nuestroProyecto3.png';
import nuestroProyecto4 from '../recursos/nuestroProyecto4.png';
import nuestroProyecto5 from '../recursos/nuestroProyecto5.png';
import nuestroProyecto6 from '../recursos/nuestroProyecto6.png';
import leftJoin1 from '../recursos/leftJoin1.png';
import leftJoin2 from '../recursos/leftJoin2.png';
import rightJoin1 from '../recursos/rightJoin1.png';
import rightJoin2 from '../recursos/rightJoin2.png';

const dataInstall = [
    {
        "title": "Que es Mysql",
        "descripcion": 'Para instalar Mysql se debe dirigirse a la pagina oficial de Mysql para su descarga https://dev.mysql.com/downloads/workbench/',
        "img": paso1
    },
    {
        "title": 'Se le da "Go to Download"',
        "descripcion": '',
        "img": paso2
    },
    {
        "title": 'Una vez descargado él .exe se ejecuta',
        "descripcion": '',
        "img": paso3
    },
    {
        "title": 'Nos aparece la siguiente ventana emergente',
        "descripcion": '',
        "img": paso4
    },
    {
        "title": 'Se le da en Next, se deja seleccionada la casilla para hacer la instalación y/o actualización del Mysql Workbech',
        "descripcion": '',
        "img": paso5
    },
    {
        "title": 'Se le da en siguiente y en ejecutar',
        "descripcion": '',
        "img": paso6
    },
    {
        "title": 'Una vez completado se le da en siguiente',
        "descripcion": '',
        "img": paso7
    },
    {
        "title": 'Se selecciona Finish',
        "descripcion": '',
        "img": paso8
    },
    {
        "title": 'En la siguiente ventana emergente que aparece se selecciona add…',
        "descripcion": '',
        "img": paso9
    },
    {
        "title": 'Se selecciona Mysql Server, Mysql Shell y un conector de Mysql en este caso ODBC',
        "descripcion": '',
        "img": paso1011
    },
    {
        "title": 'Se le da en Next y en ejecutar',
        "descripcion": '',
        "img": paso12
    },
    {
        "title": 'Una vez instalado se va a configurar',
        "descripcion": '',
        "img": paso13
    },
    {
        "title": 'Se deja en modo desarrollador y los puertos que vienen por defecto, se le da Next',
        "descripcion": '',
        "img": paso14
    },
    {
        "title": 'Se deja seleccionada la autenticación por encriptación y se le da en Next ',
        "descripcion": '',
        "img": paso15
    },
    {
        "title": 'Se coloca una contraseña y se le da en Next',
        "descripcion": '',
        "img": paso16
    },
    {
        "title": 'Aquí se selecciona si el servicio de inicio del Mysql es manual o automático, en nuestro caso va a ser manual por consiguiente se le quita el chek en el cuadro de Start the Mysql at System Startup y Next',
        "descripcion": '',
        "img": paso17
    },
    {
        "title": 'Se le da en ejecutar para que se instale ',
        "descripcion": '',
        "img": paso18
    },
    {
        "title": 'Se le da en Next una vez la configuración haya terminado ',
        "descripcion": '',
        "img": paso19
    },
    {
        "title": 'Se le quita el check en Start Nysql after setup, se le da en Finish y se puede cerrar la ventana emergente',
        "descripcion": '',
        "img": paso20
    }
]

const dataEjecucion = [
    {
        "description": "Se abre la consola de servicios de Microsoft para ejecutar los servicios de Mysql",
        "img": paso1e
    },
    {
        "description": "Se hace doble click en Mysql80 para ejecutarlo",
        "img": paso2e
    },
    {
        "description": "Se abre la consola de Mysql Shell",
        "img": paso3e
    },
    {
        "description": "Para conectarse con la base de datos se escribe sql;",
        "img": paso4e
    },
    {
        "description": "Para ver las bases de datos que se tienen en el gestor se coloca show databases;",
        "img": paso5e
    },
    {
        "description": "Para crear tablas o modificarlas, realizar consultas, se utilizan los comandos de sql.",
        "img": paso6e
    }
]

const diseñoDB = [diseñoBD1, diseñoBD2, diseñoBD3, diseñoBD4]

const tablaEmpleado = [
    {
        "atributo": "Id_empleado",
        "tipoDato": "Int",
        "longitud": "-",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "Email",
        "tipoDato": "Varchar",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Email del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "Password",
        "tipoDato": "Varchar",
        "longitud": "32",
        "llave": "",
        "null": "No",
        "descripcion": "Clave del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "Nombres",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Nombres del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "Apellidos",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Apellidos del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "fechaNacimiento",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de nacimiento del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "Identificación",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Número de identificación del empleado",
        "entidadForanea": ""
    },
    {
        "atributo": "tipoIdentificacion",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Tipo de identificación (cc, ce)",
        "entidadForanea": ""
    }
]

const tablaCargo = [
    {
        "atributo": "Id_cargo",
        "tipoDato": "Int",
        "longitud": "-",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código del cargo.",
        "entidadForanea": ""
    },
    {
        "atributo": "Nombre_cargo",
        "tipoDato": "Varchar",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Nombre del cargo",
        "entidadForanea": ""
    },
    {
        "atributo": "Funciones",
        "tipoDato": "Varchar",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Funciones del departamento",
        "entidadForanea": ""
    },
    {
        "atributo": "Descripción",
        "tipoDato": "Varchar",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Descripción del cargo",
        "entidadForanea": ""
    },
    {
        "atributo": "Hora_inicio",
        "tipoDato": "Time",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Hora de iniciar su horario laboral",
        "entidadForanea": ""
    },
    {
        "atributo": "Hora_fin",
        "tipoDato": "Time",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Hora final de su horario laboral",
        "entidadForanea": ""
    },
    {
        "atributo": "Fecha_inicio",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de inicio de su contrato laboral",
        "entidadForanea": ""
    },
    {
        "atributo": "Fecha_fin",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "Si",
        "descripcion": "Fecha final de su contrato laboral",
        "entidadForanea": ""
    },
    {
        "atributo": "Tipo_contrato",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Tipo de contrato laboral con la empresa",
        "entidadForanea": ""
    },
    {
        "atributo": "Empleado_id_empleado",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del empleado asociado",
        "entidadForanea": "empleado"
    }
]

const tablaArea = [
    {
        "atributo": "Id_area",
        "tipoDato": "Int",
        "longitud": "-",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código del area.",
        "entidadForanea": ""
    },
    {
        "atributo": "Nombre_area",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "-",
        "null": "No",
        "descripcion": "Nombre del área",
        "entidadForanea": ""
    },
    {
        "atributo": "Nombre_jefe",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Nombre del jefe del área",
        "entidadForanea": ""
    },
    {
        "atributo": "Responsable",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Nombre del responsable si el jefe no esta",
        "entidadForanea": ""
    },
    {
        "atributo": "CentroDeCostos",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Código del centro de costos",
        "entidadForanea": ""
    },
    {
        "atributo": "Presupuesto",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Presupuesto destinado para esa área",
        "entidadForanea": ""
    },
    {
        "atributo": "Cargo_id_cargo",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del cargo",
        "entidadForanea": "cargo"
    }
]

const tablaSolicitudes = [
    {
        "atributo": "Id_solicitud",
        "tipoDato": "Int",
        "longitud": "-",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código de las solicitudes",
        "entidadForanea": ""
    },
    {
        "atributo": "numeroSolicitud",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Numero de la solicitud",
        "entidadForanea": ""
    },
    {
        "atributo": "fechaSolicitud",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de realización de la solicitud",
        "entidadForanea": ""
    },
    {
        "atributo": "aprobadoJefe",
        "tipoDato": "Booleano",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Visto bueno de aprobación del jefe del área ",
        "entidadForanea": ""
    },
    {
        "atributo": "aprobadoDirector",
        "tipoDato": "Booleano",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Visto bueno de aprobación del director financiero",
        "entidadForanea": ""
    },
    {
        "atributo": "Empleado_id_empleado",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del empleado",
        "entidadForanea": ""
    }
]

const tablaCotizaciones = [
    {
        "atributo": "Id_cotizaciones",
        "tipoDato": "Int",
        "longitud": "-",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código de CategoriaARL",
        "entidadForanea": ""
    },
    {
        "atributo": "Consecutivo",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Número del consecutivo ",
        "entidadForanea": ""
    },
    {
        "atributo": "Fecha",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de la cotización",
        "entidadForanea": ""
    },
    {
        "atributo": "Proveedor_id_proveedor",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del proveedor",
        "entidadForanea": "Proveedor"
    },
    {
        "atributo": "Solicitudes_id_solicitud",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código de la solicitud",
        "entidadForanea": "solicitud"
    }
]

const tablaAlmacen = [
    {
        "atributo": "Id_almacen",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código del almacén",
        "entidadForanea": ""
    },
    {
        "atributo": "Capacidad",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Capacidad de almacenamiento",
        "entidadForanea": ""
    },
    {
        "atributo": "Ubicación",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Lugar donde está ubicado",
        "entidadForanea": ""
    },
    {
        "atributo": "Ciudad",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Ciudad donde se encuentra el almacén",
        "entidadForanea": ""
    }
]

const tablaArticulo = [
    {
        "atributo": "Id_articulo",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "PK",
        "null": "No",
        "descripcion": "Identificador del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Código",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Código del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Nombre_articulo",
        "tipoDato": "Varchar",
        "longitud": "16",
        "llave": "",
        "null": "No",
        "descripcion": "Nombre del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Unid_medida",
        "tipoDato": "Varchar",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Unidad de medida del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Valor_unid",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Valor unitario del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Dimensiones",
        "tipoDato": "Decimal",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Dimensiones del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Peso",
        "tipoDato": "Decimal",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Peso del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Garantía",
        "tipoDato": "Datetime",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Garantía que tiene ese articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Descripción",
        "tipoDato": "Varchar",
        "longitud": "255",
        "llave": "",
        "null": "No",
        "descripcion": "Descripción del articulo",
        "entidadForanea": ""
    }
]

const tablaTransaccionInterna = [
    {
        "atributo": "idtransaccionInterna",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "PK",
        "null": "No",
        "descripcion": "Identificador de la transacción interna",
        "entidadForanea": ""
    },
    {
        "atributo": "Código",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Código de la transacción interna",
        "entidadForanea": ""
    },
    {
        "atributo": "tipoEntrega",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Tipo de entrega del articulo",
        "entidadForanea": ""
    },
    {
        "atributo": "Fecha",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de realización de la transacción",
        "entidadForanea": ""
    },
    {
        "atributo": "cantidadEntregada",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Cantidad que se entrega de los artículos",
        "entidadForanea": ""
    },
    {
        "atributo": "Almacen_id_almacen",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del almacen",
        "entidadForanea": "Almacen"
    },
    {
        "atributo": "Articulo",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del articulo",
        "entidadForanea": "Articulo "
    }
]

const tablaProveedor = [
    {
        "atributo": "Id_proveedor",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "PK",
        "null": "No",
        "descripcion": "Código del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Identificación",
        "tipoDato": "Int",
        "longitud": "25",
        "llave": "",
        "null": "No",
        "descripcion": "Identificación del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Nombre_proveedor",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Nombre del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Email_proveedor",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Correo electrónico del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Dirección_proveedor",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Dirección del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Teléfono_proveedor",
        "tipoDato": "Int",
        "longitud": "10",
        "llave": "",
        "null": "No",
        "descripcion": "Teléfono del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Ciudad_proveedor",
        "tipoDato": "Varchar",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Ciudad del proveedor",
        "entidadForanea": ""
    },
    {
        "atributo": "Articulo_id_articulo",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código del articulo",
        "entidadForanea": "articulo"
    }
]

const tablaOrdenCompra = [
    {
        "atributo": "Id_ordencompra",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "PK",
        "null": "No",
        "descripcion": "Identificación de la orden de compra",
        "entidadForanea": ""
    },
    {
        "atributo": "numeroOrden",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Número de la orden de compra",
        "entidadForanea": ""
    },
    {
        "atributo": "fechaOrden",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de la orden de compra",
        "entidadForanea": ""
    },
    {
        "atributo": "fechaEntrega",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de entrega de la orden de compra",
        "entidadForanea": ""
    },
    {
        "atributo": "aprobacionDirector",
        "tipoDato": "Booleano",
        "longitud": "45",
        "llave": "",
        "null": "No",
        "descripcion": "Verificación de la aprobación del director financiero",
        "entidadForanea": ""
    },
    {
        "atributo": "Cotizaciones_id_cotizaciones",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código de las cotizaciones",
        "entidadForanea": "cotizaciones"
    }
]

const tablaFactura = [
    {
        "atributo": "Id_Factura",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "PK",
        "null": "No",
        "descripcion": "Identificación de la factura",
        "entidadForanea": ""
    },
    {
        "atributo": "numeroDeEntrada",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Numero de entrada de la factura",
        "entidadForanea": ""
    },
    {
        "atributo": "fechaRealizada",
        "tipoDato": "Date",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Fecha de la realización de la factura",
        "entidadForanea": ""
    },
    {
        "atributo": "cantidadComprada",
        "tipoDato": "Int",
        "longitud": "",
        "llave": "",
        "null": "No",
        "descripcion": "Cantidad de artículos comprados",
        "entidadForanea": ""
    },
    {
        "atributo": "Ordencompra_id_ordencompra",
        "tipoDato": "Varchar",
        "longitud": "",
        "llave": "FK",
        "null": "No",
        "descripcion": "Código de la orden de compra",
        "entidadForanea": "ordencompra"
    }
]

const dataBibliografia = [
    'Bigdata-analytics. (s.f.). ¿Qué es un procedimiento almacenado? Obtenido de https://bigdata-analytics.es/sql/stored-procedures/',
    'Datamedia. (s.f.). ¿Qué es SQL? Obtenido de https://datademia.es/blog/que-es-sql',
    'Microsoft. (s.f.). Vistas. Obtenido de https://docs.microsoft.com/es-es/sql/relational-databases/views/views?view=sql-server-ver15',
    'Peñaloza, J. (2020). ¿Que es una transacción? Obtenido de https://www.purocodigo.net/articulo/transacciones-en-mysql',
    'Programador cli. (s.f.). Desencadenantes en mysql. Obtenido de https://programmerclick.com/article/560155323/',
    'Robledano, Á. (24 de Septiembre de 2019). Qué es MySQL: Características y ventajas. Obtenido de https://openwebinars.net/blog/que-es-mysql/',
    'Schiaffarino, A. (12 de Marzo de 2019). Modelo cliente servidor. Obtenido de https://blog.infranetworking.com/modelo-cliente-servidor/',
    'Soto, J. A. (27 de Julio de 2020). ¿Qué es PowerShell? Obtenido de https://www.geeknetic.es/PowerShell/que-es-y-para-que-sirve',
    'Sentencias principales de SQL: https://diego.com.es/principales-tipos-de-joins-en-sql'
]

const dataCompras = [
    'Recibe las solicitudes de compras de las diferentes áreas de la empresa.',
    'Cada solicitud tiene un responsable.',
    'Cada solicitud es autorizada por el jefe del área y posteriormente por el director Financiero.',
    'Quien realiza una solicitud puede ser responsable de uno o varios centros de costos, con la salvedad de que él como empleado solo está adscrito a uno.',
    'De la solicitud se debe diligenciar la siguiente información: Número de la solicitud (consecutivo), Fecha, Responsable (nombre y cédula), Centro de Costos, Rubro presupuestal del cual se descargará la compra. En cada solicitud se pueden discriminar uno o muchos ítems con la siguiente información: ítem, nombre del bien, cantidad solicitada, unidad de medida del bien, valor unitario y valor total. Cada solicitud debe ser totalizada',
    'Cada bien es identificado por un código universal que es único y es de carácter devolutivo (suministro) o un bien inmueble.',
    'Una vez diligenciada la solicitud es remitida al área de compras para realizar su correspondiente cotización.',
    'Las cotizaciones son realizadas con uno o varios proveedores de los bienes solicitados.',
    'Una vez la cotización definitiva está lista, se crea una orden contractual que maneja la siguiente información: Número de la orden contractual, nit y nombre del proveedor al cual se le va a realizar la compra, fecha de la orden, monto total de la orden, fecha de entrega. Cada orden puede tener asociado uno o varios ítems de la solicitud o solicitudes que van a ser despachadas. Cada ítem tiene la siguiente información: nombre del bien, cantidad solicitada, cantidad despachada, unidad de medida del bien, valor unitario y valor total.',
    'La orden de compra es aprobada por el director Financiero para que sea enviada al proveedor elegido.'
]

const dataAlmacen = [
    'Su función principal es recepcionar los bienes que llegan de los proveedores y distribuirlos a las correspondientes áreas que realizaron las solicitudes de compras.',
    'Cuando llega un proveedor de mercancía, este hace una entrega física de los bienes, los cuales son comparados con la factura que esta entrega y con la orden de compra correspondiente. Si esta acción es correcta se registra una entrada de almacén por cada factura relacionada, con la siguiente información: Número de Entrada, Fecha, Número de factura, Proveedor, Total Bienes, Valor Total (los totales deben coincidir con los de la factura). Adjunto a esta se discriminan los ítems recibidos con la siguiente información: nombre del bien, cantidad entregada.',
    'Cuando el almacén decide despachar los bienes a las diferentes áreas solicitantes, registra cada una de las entregas en Salidas de Almacén con la siguiente información: Número de Salida, Empleado responsable del bien a entregar, fecha de salida, fecha de entrega. Por cada entrega se detalla cada uno de los ítems con la siguiente información: nombre del bien, cantidad entregada.',
    'Una entrada de almacén puede generar muchas salidas de almacén, por ejemplo: Pueden ingresar 500 pacas de papel higiénico, pero como se debe repartir entre varias áreas, cada una requiere de una salida de almacén.'
]

const dataInventarios = [
    'Es la encargada de administrar y controlar la ubicación de los bienes dentro de la empresa, por esto antes de que el bien salga del almacén debe ser codificado a través de un código único que lo haga identificable dentro de la empresa.',
    'La ubicación del bien se identifica por la siguiente información: responsable del bien, fecha de entrega, dirección del bien (ubicación).'
]

export const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row text-center">
                <h1>Recurso digital</h1>
            </div>
        </div>
    )
}

export const Bibliografia = () => {

    const [showBibliografia, setshowBibliografia] = useState("block");
    const [showSqlSentence, setshowSqlSentence] = useState("none");

    const bibliografiaShow = () => {
        setshowBibliografia("block")
        setshowSqlSentence("none")
    }

    const sqlSentencesShow = () => {
        setshowBibliografia("none")
        setshowSqlSentence("block")
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <button type='button' className='btn btn-success col-md-4 m-2' onClick={() => bibliografiaShow()}>Bibliografía</button>
                <button type='button' className='btn btn-success col-md-4 m-2' onClick={() => sqlSentencesShow()}>Sentencias SQL</button>
                <div style={{ display: showBibliografia }}>
                    <ul>
                        {dataBibliografia.map((dat, index) => (<li key={index}>{dat}</li>))}
                    </ul>
                </div>
                <div style={{ display: showSqlSentence }}>
                    <SentenciasSql />
                </div>
            </div>
        </div>
    )
}


export const DiseñoProyecto = () => {

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
                        {dataCompras.map((dat, index) => (<li key={index}>{dat}</li>))}
                    </ul>
                    <h3>Almacen</h3>
                    <ul>
                        {dataAlmacen.map((dat, index) => (<li key={index}>{dat}</li>))}
                    </ul>
                    <h3>Inventario</h3>
                    <ul>
                        {dataInventarios.map((dat, index) => (<li key={index}>{dat}</li>))}
                    </ul>
                </div>
                <div style={{ display: avances }}>
                    <h3 className="text-center">Diseño de la base de datos</h3>
                    <DiseñoBaseDatos />
                    <h3 className="text-center">Avance en el diseño de clases</h3>
                    <img alt="diseñoBD5" src={diseñoBD5} className="d-block w-100" />
                </div>
            </div>
        </div>
    )
}

export const Diccionario = () => {
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

export const Entorno = () => {

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
        </div>
    )
}

export const Introducción = () => {
    return (
        <div>
            <ul>
                <li>
                    <b>Que es Mysql</b> <br />
                    Mysql es un software destinado a bases de datos, específicamente a gestionar las bases de datos relacionales, fue creada por Mysql AB, la cual fue comprada por Sun Microsoft System y esta fue comprada por Oracle. Tiene una versión gratuita y otra comercial donde esta tiene herramientas de monitorización. (Robledano, 2019)
                </li>
                <li>
                    <b>Características de Mysql</b> <br />

                    Dado que utiliza el modelo relación, es decir, utiliza tablas que se interconectan entre si para almacenar la información y organizarla correctamente. Debido a esto tiene las siguientes características: <br /> - Arquitectura Cliente – Servidor: <br /> Al utilizar este modelo lo que significa es que el cliente o usuario de la base de datos puede no solo hacer consultas al servidor, si no también modificar o almacenar datos en la misma. (Schiaffarino, 2019) <br /> - Compatibilidad con SQL: Sql es un lenguaje de programación estructurado el cual permite manipular las bases de datos, debido a esto Mysql permite la manipulación de este lenguaje. (Datamedia) <br /> - Vistas: Permiten realizar tablas virtuales de las consultas, a partir de la versión 5.0 se puede realizar una configuración personalizada de las vistas. (Microsoft) <br /> - Procedimientos almacenados:  Es un código que permite guardar información y este código puede reutilizarse. (Bigdata-analytics) <br /> - Desencadenates: Es un procedimiento almacenado especial, ya que utiliza los eventos de las tablas funcionando como un disparador. (Programador cli) <br /> - Transacciones: Son una secuencia de ordenes que actúan como una unidad, y si no se llega a cumplir la tarea, hace una reversión de las actividades que se hayan hecho hasta ese momento. (Peñaloza, 2020)"
                </li>
                <li>
                    <b>Que es Mysql shell</b> <br />
                    Powershell es un CLI o una interfaz de líneas de comandos en donde se pueden ejecutar scripts, en Mysql se le conoce como la consola Mysql Shell, la cual permite ejecutar líneas de comandos para la manipulación de la base de datos. (Soto, 2020)
                </li>
            </ul>
        </div>
    )
}

const Instalacion = () => {
    return (
        <div>
            <ul>
                {dataInstall.map((dt, index) => (<li key={index} className="mt-3">
                    <b>{dt.title}</b> <br />
                    {dt.descripcion} <br />
                    <img alt="dt" src={dt.img} className="d-block w-100" />
                </li>))}
            </ul>
        </div>
    )
}

const Ejecucion = () => {
    return (
        <div>
            <ul>
                {dataEjecucion.map((dt, index) => (<li key={index} className="mt-3">
                    {dt.description} <br />
                    <img alt="dt" src={dt.img} className="d-block w-100" />
                </li>))}
            </ul>
        </div>
    )
}

const DiseñoBaseDatos = () => {
    return (
        <div>
            <ul>
                {diseñoDB.map((dat, index) => (
                    <li key={index}>
                        <img alt="dat" src={dat} className="d-block w-100" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SentenciasSql = () => {
    return (
        <div>
            <h3 className="text-center">Principales sentencias de sql</h3>
            <p>Crear una base de datos y usarla</p>
            <img alt="createTable1" src={createTable1} className="d-block w-100" />
            <p>Crear una tabla</p>
            <img alt="createTable2" src={createTable2} className="d-block w-100" />
            <h3 className="text-center">Inner join</h3>
            <p>
                INNER JOIN lo que hace es seleccionar todas las filas de las dos columnas siempre y cuando haya una coincidencia entre las columnas en ambas tablas. Es el tipo de JOIN más común.
            </p>
            <img alt="innerJoin1" src={innerJoin1} className="d-block w-100" />
            <img alt="innerJoin2" src={innerJoin2} className="d-block w-100" />
            <h3 className="text-center">Aplicándolo a nuestro proyecto</h3>
            <img alt="nuestroProyecto1" src={nuestroProyecto1} className="d-block w-100" />
            <img alt="nuestroProyecto2" src={nuestroProyecto2} className="d-block w-100" />
            <h3 className="text-center">Left join</h3>
            <p>
                LEFT JOIN mantiene todas las filas de la tabla izquierda (la tabla1). Las filas de la tabla derecha se mostrarán si hay una coincidencia con las de la izquierda. Si existen valores en la tabla izquierda pero no en la tabla derecha, ésta mostrará null.
            </p>
            <img alt="leftJoin1" src={leftJoin1} className="d-block w-100" />
            <img alt="leftJoin2" src={leftJoin2} className="d-block w-100" />
            <h3 className="text-center">Aplicándolo a nuestro proyecto</h3>
            <img alt="nuestroProyecto3" src={nuestroProyecto3} className="d-block w-100" />
            <img alt="nuestroProyecto4" src={nuestroProyecto4} className="d-block w-100" />
            <h3 className="text-center">RIGHT JOIN</h3>
            <p>
                Es igual que LEFT JOIN pero al revés. Ahora se mantienen todas las filas de la tabla derecha (tabla2). Las filas de la tabla izquierda se mostrarán si hay una coincidencia con las de la derecha. Si existen valores en la tabla derecha pero no en la tabla izquierda, ésta se mostrará null.
            </p>
            <img alt="rightJoin1" src={rightJoin1} className="d-block w-100" />
            <img alt="rightJoin2" src={rightJoin2} className="d-block w-100" />
            <h3 className="text-center">Aplicándolo a nuestro proyecto</h3>
            <img alt="nuestroProyecto5" src={nuestroProyecto5} className="d-block w-100" />
            <img alt="nuestroProyecto6" src={nuestroProyecto6} className="d-block w-100" />
            <p>En este caso no muestra el dato repetido que están en la tabla empleado, y tampoco los que no tienen asignado un cargo</p>
        </div>
    )
}

const TableEmpleado = () => {
    return (
        <div>
            <h3>1. Tabla: Empleado</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaEmpleado.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableCargo = () => {
    return (
        <div>
            <h3>2. Tabla: Cargo</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaCargo.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableArea = () => {
    return (
        <div>
            <h3>3. Tabla: Area</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaArea.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableSolicitudes = () => {
    return (
        <div>
            <h3>4. Tabla: Solicitudes</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaSolicitudes.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableCotizaciones = () => {
    return (
        <div>
            <h3>5. Tabla: Cotizaciones</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaCotizaciones.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableAlmacen = () => {
    return (
        <div>
            <h3>6. Tabla: Almacen</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaAlmacen.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableArticulo = () => {
    return (
        <div>
            <h3>7. Tabla: Articulo</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaArticulo.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableTransaccionInterna = () => {
    return (
        <div>
            <h3>8. Tabla: Transacción Interna</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaTransaccionInterna.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableProveedor = () => {
    return (
        <div>
            <h3>9. Tabla: Proveedor</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaProveedor.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableOrdenCompra = () => {
    return (
        <div>
            <h3>10. Tabla: Proveedor</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaOrdenCompra.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

const TableFactura = () => {
    return (
        <div>
            <h3>10. Tabla: Proveedor</h3>
            <table className="table table-hover">
                <thead className="text-center">
                    <tr>
                        <th>ATRIBUTO</th>
                        <th>TIPO DE DATO</th>
                        <th>LONGITUD</th>
                        <th>LLAVE</th>
                        <th>NULL</th>
                        <th>DESCRIPCIÓN</th>
                        <th>TABLA O ENTIDAD FORÁNEA</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {tablaFactura.map((dat, index) =>
                        <tr key={index}>
                            <td>{dat.atributo}</td>
                            <td>{dat.tipoDato}</td>
                            <td>{dat.longitud}</td>
                            <td>{dat.llave}</td>
                            <td>{dat.null}</td>
                            <td>{dat.descripcion}</td>
                            <td>{dat.entidadForanea}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
