

import { uuid as getUUID } from "./plugins/get-uuid.plugin";
import { getAge } from "./plugins/get-age.plugin";

interface Person {
    name: string,
    birthdate: string
}

interface BuildMakerPersonOptions {
    getUUID: () => string,
    getAge: (birthdate: string) => number
}

const person: Person = {
    name: "Dennys Ferrer",
    birthdate: '1988-10-01'
}

export const buildMakePerson = ({getUUID, getAge}: BuildMakerPersonOptions) => {

    return ({name, birthdate}: Person) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }

}

