//Requires:
const fs = require('fs');
const colors = require('colors');
//hay 3 tipos de requires: fs los propios de nOde, los express: hechos por otra gente que los traemos
//nuestros requires: ./fs

let listarTabla = (base, limite = 10) => {
    console.log('-------------------------'.green);
    console.log(`tabla de ${base}`.green);
    console.log('-------------------------'.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);

    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es número');
            return;
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;

        }

        //llendo a nodejs.org -> Docs y entrando a la version de node que se tiene instalada
        //se pueden ver los paquetes que tiene pre-instalado node..
        //por ejemplo File System (nos permitira hacer manejo de los archivos)

        //queremos guardar la tabla de multiplicar en un archivo.
        //File system:https://nodejs.org/dist/latest-v10.x/docs/api/fs.html

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`El archivo tabla-${base} a sido creado!`);
        });

    });
}


//para exportar la funcion a otros archivos
module.exports = {
    crearArchivo,
    listarTabla
}