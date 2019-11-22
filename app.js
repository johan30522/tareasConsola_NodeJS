const argv = require('./config/yargs').argv;
//const argv = require('yargs').argv;
const tarea = require('./tareas/por-hacer');
const colors = require('colors');


console.log(argv);
let comando = argv._[0];

switch (comando) {

    case 'create':
        let resp = tarea.crear(argv.description);
        console.log(resp);
        //console.log('Crear por hacer');
        break;
    case 'list':
        console.log('list por hacer');
        let listado = tarea.getListadoDB();
        for (let tarea of listado) {
            console.log('=============Tarea Por hacer======================'.green);
            console.log(`Nombre: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
            console.log('=================================================='.green);
        }
        break;
    case 'update':
        console.log('update por hacer');
        let aactualizado = tarea.actualizarDB(argv.description, argv.completado);
        console.log(aactualizado);
        break;
    case 'delete':
        console.log('delete por hacer');
        let borrado = tarea.removeDB(argv.description);
        console.log(borrado);
        break;
    default:
        break;
}