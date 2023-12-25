import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';


const base:number = yarg.b;
const limit:number = Number(yarg.limit);

const message:string = `
================================
        TABLA DEL ${base}
================================\n`;


const createTable  = (base:number, limit: number) => {
    let data: string = '';
    for (let i = 0; i <= limit; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    return message + data;
}

const guardarArchivo = (data: string, numero: number) => {
    const outputpath = `outputs`;
    fs.mkdirSync(outputpath, {recursive: true});
    fs.writeFileSync(`${outputpath}/tabla-${numero}.txt`, data);
}

const tabla = createTable(base, limit);
if(yarg.s){
    console.log(tabla);
}
    



guardarArchivo(tabla, base);



