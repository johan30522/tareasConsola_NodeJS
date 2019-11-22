const fs = require('fs');
let listadoPorHacer = [];


let guardarDB = () => {
    let dataJson = JSON.stringify(listadoPorHacer);

    const data = new Uint8Array(Buffer.from(dataJson));
    fs.writeFile('db/data.json', data, (err) => {
        if (err) console.log(err);
        console.log('The file has been saved!');
    });


}
let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}
let getListadoDB = () => {
    try {
        cargarDB();
        return listadoPorHacer;
    } catch (error) {
        listadoPorHacer = [];
    }

}

const actualizarDB = (description, completado = true) => {
    cargarDB();
    console.log(description);
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === description;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}
const removeDB = (description) => {
    cargarDB();
    console.log(description);

    //listadoPorHacer.splice(index, 1);
    nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== description;
    })
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

    }
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

module.exports = {
    crear,
    getListadoDB,
    actualizarDB,
    removeDB
}