const argv = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, crearArchivo2 } =  require("./helpers/multiplicar");


console.clear();

console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "ha sido creado wey."))
    .catch(err => console.log(err))

crearArchivo2(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "ha sido creado salchi."))
    .catch(err => console.log(err))