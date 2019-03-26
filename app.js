const argv = require('./conf/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let tareas = porHacer.getListado(argv.c);

        for (let tarea of tareas) {
            console.log('================================================================'.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('================================================================'.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.c);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}