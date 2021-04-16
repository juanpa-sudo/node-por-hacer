const fs = require("fs");

let listadoPorHacer = [];

const porHacer = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("db/data.json", data, (err) => {
        if (err) throw new Error("No se pudo grabar la informacion", err);
    });
};

const tareasGuardadas = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
};

const nuevaTarea = (descripcion) => {
    tareasGuardadas();
    let tarea = {
        descripcion,
        completado: false,
    };
    listadoPorHacer.push(tarea);
    porHacer();
    return tarea;
};

const listTarea = () => {
    tareasGuardadas();
    return listadoPorHacer;
};

const actualizarTarea = (descripcion, completado = true) => {
    tareasGuardadas();
    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion === descripcion
    );
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        porHacer();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    tareasGuardadas();
    let nuevoListado = listadoPorHacer.filter((tarea) => {
        return tarea.descripcion !== descripcion;
    });
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        porHacer();
        return true;
    }
};

module.exports = { nuevaTarea, listTarea, actualizarTarea, borrar };