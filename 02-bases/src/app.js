// const { uuid } = require('./plugins/get-uuid.plugin') 
// const { getAge } = require('./plugins/get-age.plugin');


// // const { emailTemplate } = require('./js-foundation/01-template');


// // console.log('Hola mundo desde app.js');

// // console.log(emailTemplate);

// //require('./js-foundation/02-destructuring');

// // const { getUserById } = require('./js-foundation/03-callbacks');
// // const id = 1

// // getUserById(id, (error, user) => {
// //     if (error){
// //         throw new Error('User not found en id: ', id);
// //     } 
// //     console.log(user);
// // });

// const { buildMakePerson } = require('./js-foundation/04-factory');

// const obj = {
//     name: "Jhon",
//     birthdate: '1988-01-10'
// }

// const makePerson = buildMakePerson(uuid, getAge);

// const jhon = makePerson(obj);

// console.log({jhon});

 const { getPokemonByName } = require('./js-foundation/promesas');

 const name = 'bulbasaur';

 const pokemon = getPokemonByName(name);

 pokemon
     .then(data => console.log({data}))
     .catch(error => console.log('Error en la adquisición de datos'))



 