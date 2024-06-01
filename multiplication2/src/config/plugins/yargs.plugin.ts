import yargs from 'yargs';


export const yarg = yargs(process.argv)
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Esta es la base de la multiplicación'
})
.option('l', {
    alias: 'limite',
    type: 'number',
    demandOption: true,
    describe: 'Limite de la tabla de multiplicación'
})
.option('s',{
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.check((argv, options) => {
    if (argv.b < 1){
        throw 'El número de la base debe ser mayor a cero';
    }
    return true;
})
.parseSync();