export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
    base: number; //
    limit?: number;
}



export class CreateTable implements CreateTableUseCase {

    constructor(){

    }


    execute({base, limit=10}: CreateTableOptions){
        const message:string = `
        ================================
                TABLA DEL ${base}
        ================================\n`;
        let data: string = '';
        for (let i = 0; i <= limit; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        return message + data;
    }
}