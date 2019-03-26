const fs = require('fs');



let listadoPorHacer = [];

const getListado = (completado = false) => {
    cargarDB();

    if (Boolean(completado)) {

        let nuevoListado = listadoPorHacer.filter(tarea => tarea.completado === Boolean(completado));
        listadoPorHacer = nuevoListado;
    }
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);



    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex((tarea) => tarea.descripcion === descripcion);

    //listadoPorHacer.
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            console.log('Error al cargar guardar', err);
        else
            console.log('Archivo Grabado en la BD');
    })
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}




const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDb();
    return porHacer;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}