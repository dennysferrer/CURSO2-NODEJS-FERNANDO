import { httpClientPlugin } from "../../src/js-foundation/plugins/http-client.plugin";


describe("http-client.plugin.ts", () => {
    test("http-client should return a string", async () => {
        const response = await httpClientPlugin.get("https://jsonplaceholder.typicode.com/todos/1");
        expect(response.id).toBe(1);
        expect(response).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        })
    });


    test("http-client should have methods POST, PUT and DELETE and should be function", async () => {
        expect(typeof httpClientPlugin.post).toBe("function");
        expect(typeof httpClientPlugin.put).toBe("function");
        expect(typeof httpClientPlugin.delete).toBe("function");
        
    })
})