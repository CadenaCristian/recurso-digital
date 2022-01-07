import React from "react"
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
        "description": "Para conectarse con la base de datos se escribe \sql;",
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

export const dataCompras = [
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

export const dataAlmacen = [
    'Su función principal es recepcionar los bienes que llegan de los proveedores y distribuirlos a las correspondientes áreas que realizaron las solicitudes de compras.',
    'Cuando llega un proveedor de mercancía, este hace una entrega física de los bienes, los cuales son comparados con la factura que esta entrega y con la orden de compra correspondiente. Si esta acción es correcta se registra una entrada de almacén por cada factura relacionada, con la siguiente información: Número de Entrada, Fecha, Número de factura, Proveedor, Total Bienes, Valor Total (los totales deben coincidir con los de la factura). Adjunto a esta se discriminan los ítems recibidos con la siguiente información: nombre del bien, cantidad entregada.',
    'Cuando el almacén decide despachar los bienes a las diferentes áreas solicitantes, registra cada una de las entregas en Salidas de Almacén con la siguiente información: Número de Salida, Empleado responsable del bien a entregar, fecha de salida, fecha de entrega. Por cada entrega se detalla cada uno de los ítems con la siguiente información: nombre del bien, cantidad entregada.',
    'Una entrada de almacén puede generar muchas salidas de almacén, por ejemplo: Pueden ingresar 500 pacas de papel higiénico, pero como se debe repartir entre varias áreas, cada una requiere de una salida de almacén.'
]

export const dataInventarios = [
    'Es la encargada de administrar y controlar la ubicación de los bienes dentro de la empresa, por esto antes de que el bien salga del almacén debe ser codificado a través de un código único que lo haga identificable dentro de la empresa.',
    'La ubicación del bien se identifica por la siguiente información: responsable del bien, fecha de entrega, dirección del bien (ubicación).'
]

export const dataBibliografia = [
    'Bigdata-analytics. (s.f.). ¿Qué es un procedimiento almacenado? Obtenido de https://bigdata-analytics.es/sql/stored-procedures/',
    'Datamedia. (s.f.). ¿Qué es SQL? Obtenido de https://datademia.es/blog/que-es-sql',
    'Microsoft. (s.f.). Vistas. Obtenido de https://docs.microsoft.com/es-es/sql/relational-databases/views/views?view=sql-server-ver15',
    'Peñaloza, J. (2020). ¿Que es una transacción? Obtenido de https://www.purocodigo.net/articulo/transacciones-en-mysql',
    'Programador cli. (s.f.). Desencadenantes en mysql. Obtenido de https://programmerclick.com/article/560155323/',
    'Robledano, Á. (24 de Septiembre de 2019). Qué es MySQL: Características y ventajas. Obtenido de https://openwebinars.net/blog/que-es-mysql/',
    'Schiaffarino, A. (12 de Marzo de 2019). Modelo cliente servidor. Obtenido de https://blog.infranetworking.com/modelo-cliente-servidor/',
    'Soto, J. A. (27 de Julio de 2020). ¿Qué es PowerShell? Obtenido de https://www.geeknetic.es/PowerShell/que-es-y-para-que-sirve'
]

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

export const Instalacion = () => {
    return (
        <div>
            <ul>
                {dataInstall.map((dt) => (<li className="mt-3">
                    <b>{dt.title}</b> <br />
                    {dt.descripcion} <br />
                    <img src={dt.img} className="d-block w-100" />
                </li>))}
            </ul>
        </div>
    )
}

export const Ejecucion = () => {
    return (
        <div>
            <ul>
                {dataEjecucion.map((dt) => (<li className="mt-3">
                    {dt.description} <br />
                    <img src={dt.img} className="d-block w-100" />
                </li>))}
            </ul>
        </div>
    )
}
