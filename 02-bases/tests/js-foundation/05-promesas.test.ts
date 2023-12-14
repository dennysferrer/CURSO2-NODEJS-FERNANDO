import { getPokemonByName } from "../../src/js-foundation/05-promesas";


describe("05-promesas.ts", () => {
    test('getPokemonByName return a pokemon', async () => {
        const namePokemon: string = "pikachu";
        const pokemon = await getPokemonByName(namePokemon);
        expect(pokemon).toBeDefined();
    })
})