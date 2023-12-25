import fs from 'fs';


export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => Boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    destination: string;
    name: string;

}


export class SaveFile implements SaveFileUseCase {
    constructor(){

    };

    execute({fileContent, destination, name}: SaveFileOptions): boolean {
        try {
            fs.mkdirSync(destination, {recursive: true});
            fs.writeFileSync(`${destination}/${name}.txt`, fileContent);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
        
    };
}