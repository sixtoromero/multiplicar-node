//requireds
const fs = require('fs');
var colors = require('colors');

//const fs = require('express');
//Son archivos que nosotros mismos escribimos
//const fs = require('./fs');

let listarTabla = (base, limite = 10) => {    
    
    if (!Number(base)){
        reject(`El valor interpretado ${base} no es un número`);
        return;
    }

    let data = '';

    console.log('=============================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=============================='.green);

    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}

crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject(`El valor interpretado ${base} no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){    
            data += `${base} * ${i} = ${base * i}\n`;
        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
        if (err) reject(err)
        else
            resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}