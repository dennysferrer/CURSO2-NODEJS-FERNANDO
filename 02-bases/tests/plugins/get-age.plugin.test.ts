import { getAge } from "../../src/js-foundation/plugins/get-age.plugin";


 describe("get-age.plugin.ts", () => {
    test("getAge should return the age of person", () => {
        const birthdate = '1988-01-10';
        expect(getAge(birthdate)).toBe(35);
    })
 })