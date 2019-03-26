const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

}

const completado = {

    alias: 'c',
    desc: 'Indica si la tarea fue completada'
}


const argv = require('yargs')
    .command('crear', 'Crea uma tarea por hacer', { descripcion })
    .command('actualizar', 'Crea un archivo de texto (.txt) con la tabla de multiplicar', { descripcion, completado })
    .command('listar', 'Para ver el listado de tareas por hacer', { completado })
    .command('borrar', 'Elimina una tarea por hacer', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}