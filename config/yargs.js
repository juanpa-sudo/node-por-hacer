const descripcion = {
    alias: "d",
    demand: true,
    desc: "Descripcon de la tarea por hacer",
};
const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completada la tarea",
};
const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion,
    })
    .command("actualizar", "actualiza el estado completado de una tarea", {
        descripcion,
        completado,
    })
    .command("borrar", "Borrar un tarea", {
        descripcion,
    })
    .help().argv;

module.exports = { argv };