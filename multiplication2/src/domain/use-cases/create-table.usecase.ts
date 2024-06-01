
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string
}

interface CreateTableOptions {
    base: number;
    limit?: number;
}



export class CreateTable implements CreateTableUseCase {

    constructor(){

    }

    execute({base, limit=10}: CreateTableOptions){
        let result = `
        =============================================
                        Tabla del ${base}
        =============================================
        \n`;
        //let result = '';

        for (let i=0; i<=limit; i++) {
            let multiplication = `${base} * ${i} = ${base*i}\n`;
            result += multiplication;
        }
        return result;
    }
}