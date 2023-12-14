import { getUserById } from "../../src/js-foundation/03-callbacks";



describe("03-callbacks.ts", () => {
    test("getUserById should return error", (done) => {
        const id:number = 10;
        getUserById(id, (error, user) => {
            expect(error).toBe(`User not found with id: ${id}`);
            expect(user).toBeUndefined();
            done();
        })   
    });

    test("getUserById should return user Dennys Ferrer", (done) => {
        const id:number = 3;
        getUserById(id, (error, user) => {
            expect(error).toBeUndefined();
            expect(user).toEqual({
                id,
                name: "Dennys Ferrer"
            })
            done();
        })   
    });
});