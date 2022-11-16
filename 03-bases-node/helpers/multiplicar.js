const fs = require("fs");
const colors = require('colors');

// Async

const crearArchivo = async( base = 5, listar = false, hasta) => {

    try {
        let salida = "";
        
        for (let i = 1; i <= hasta; i++) {
            const resultado = i * base;
            salida += (`${base} x ${i} = ${resultado}\n`);
        }
        
        if( listar ){
            console.log(salida.green);            
        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return(`tabla-${base}.txt`);     
    } catch (err) {
        throw err;
    }
}

// Lo mismo pero con Promesa

const crearArchivo2 = ( base = 5, listar = false, hasta) => {

    return new Promise((resolve, reject) => {
        let salida = "";

        for (let i = 1; i <= hasta; i++) {
            const resultado = i * base;
            salida += (`${base} x ${i} = ${resultado}\n`);
        }

        if(!salida){
            reject(`No se ha creado nada`)
        } else {
            console.log(salida);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
            if(listar){
                resolve(`tabla-${base}.txt`);
            }
        }
        
    })
}

module.exports = {
    crearArchivo,
    crearArchivo2
}