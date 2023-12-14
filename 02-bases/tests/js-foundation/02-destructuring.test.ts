import { superHeros } from "../../src/js-foundation/02-destructuring";


describe("02-destructuring.ts", () => {
    test("characters should contain Flash y Superman", () => {
        expect(superHeros).toContain("Flash");
        expect(superHeros).toContain("Superman");
    });

    test("first character should be Flash, and second Superman", () => {
        const [flash, batman] = superHeros;
        expect(flash).toBe('Flash');
        expect(batman).toBe('Batman');
    })
});

