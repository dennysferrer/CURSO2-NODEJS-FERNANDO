const { uuid } = require('./plugins/get-uuid.plugin') 
const { getAge } = require('./plugins/get-age.plugin');

const person = {
    name: "Dennys Ferrer",
    birthdate: '1988-10-01'
}

const buildMakePerson = ({uuid, getAge}) =>    {

    return ({name, birthdate}) => {
        return {
            id: uuid(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }

}




module.exports = {
    buildMakePerson
}