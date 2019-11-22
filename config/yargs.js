const opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de tareas por hacer'
    }
};
const argv = require('yargs')
    .command('list', 'Imprime ', {
        opt
    })
    .command('create', 'crea', {
        opt
    })
    .command('update', 'actualiza', {
        opt,
        completado: {
            default: true,
            alias: 'u',
            desc: 'marca como completado una tarea'
        }
    })
    .command('delete', 'elimina ', {
        opt,
        completado: {
            default: true,
            alias: 'd',
            desc: 'elimina una tarea'
        }
    })
    .help()
    .argv;
module.exports = {
    argv
};