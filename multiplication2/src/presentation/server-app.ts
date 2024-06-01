import { CreateTable } from "../domain/use-cases/create-table.usecase";
import { SaveFile } from "../domain/use-cases/save-file.usecase"

interface runOptions {
    base: number,
    limit: number,
    showTable: boolean
}

export class ServerApp {


    static run({ base, limit, showTable }: runOptions) {
        console.log("Server Running ...");
        const table = new CreateTable().execute({base, limit});

        if (showTable) {
            console.log(table);
        }

        const saveTable = new SaveFile().execute({fileContent: table, fileName: `tabla-${base}` })
    }

}