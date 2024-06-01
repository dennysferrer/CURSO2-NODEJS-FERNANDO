import fs from 'node:fs';
import { yarg } from './config/plugins/yargs.plugin';


const base = yarg.b;

const tabla = (base: number) => {
    let result = `
    =============================================
                    Tabla del ${base}
    =============================================
    \n`;
    //let result = '';

    for (let i=0; i<=yarg.l; i++) {
        let multiplication = `${base} * ${i} = ${base*i}\n`;
        result += multiplication;
    }
    return result;
};

const saveFile = (file: string, base:number) => {
    try {
        const path = `outputs`
        fs.mkdirSync(path, { recursive: true });
        fs.writeFileSync(`${path}/tabla-${base}.txt`, file);
        console.log("Archivo creado satisfactoriamente ...");
        if (yarg.s){
            console.log(file);
        }
    } catch (error) {
        console.error(error);
    }

    return true;
        
}

const file = tabla(base);
saveFile(file, base);

