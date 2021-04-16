// const argv = require("./config/yargs").argv;
const argv = require("./config/yargs").argv;
const porHacer = require("./porHacer/porHacer");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.nuevaTarea(argv.descripcion);
        console.log(tarea);
        break;
    case "actualizar":
        let actualizar = porHacer.actualizarTarea(
            argv.descripcion,
            argv.completado
        );
        console.log(actualizar);
        break;
    case "listar":
        let listado = porHacer.listTarea();
        for (const tarea of listado) {
            console.log("===================POR HACER=============".green);
            console.log(tarea.descripcion);
            console.log("Estado", tarea.completado);
            console.log("==========================================".green);
        }
        break;
    case "borrar":
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log("comando desconocido");
        break;
}