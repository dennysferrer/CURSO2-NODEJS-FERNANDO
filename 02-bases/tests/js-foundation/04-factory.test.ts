import { buildMakePerson } from "../../src/js-foundation/04-factory";



describe("04-factory.ts", () => {

    const getUUID = () => '123456789';
    const getAge = (birthdate: string) => 35;

    test("buildMakePerson should return a function", () => {
        const makePerson = buildMakePerson({
            getUUID,
            getAge
        });
        expect(typeof makePerson).toBe('function');
    });

    test("makePeron should return a Person", () => {
        const makePerson = buildMakePerson({
            getUUID,
            getAge
        });
        const obj = {
            name: "Jhon",
            birthdate: '1988-01-10'
        }
        const persona = makePerson(obj)
        expect(persona).toEqual({
            id: '123456789',
            name: 'Jhon',
            birthdate: '1988-01-10',
            age: 35
        })
    })
})