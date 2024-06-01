const heroes = [
    {
        id: 1,
        name: "Ironman",
        owner: "Marvel"
    },
    {
        id: 2,
        name: "Spiderman",
        owner: "Marvel"
    },
    {
        id: 3,
        name: "Batman",
        owner: "DC"
    }
]

const findHeroById = (id: number) => {
    const hero = heroes.find(item => item.id == id)
    return hero;
}

console.log(findHeroById(1)?.name ?? "Hero not found");