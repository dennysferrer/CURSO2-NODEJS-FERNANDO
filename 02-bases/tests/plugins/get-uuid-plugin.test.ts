import { uuid } from "../../src/js-foundation/plugins/get-uuid.plugin";



describe("get-uuid.plugin.ts", () => {
    test("uuid should return a UUID", () => {
        const id = uuid();
        expect(typeof id).toBe("string");
        expect(id.length).toBe(36);
    })
})