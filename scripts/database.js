export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            species: "Leopard Wrasse",
            name: "Bart",
            food: "crustaceans",
            size: 6,
            image: `images/leopard_a_2_27_03_web-100a77622fd4fc17b688ceb183e6eb76.jpg`
        },
        {
            id: 2,
            species: "Leopard Wrasse",
            name: "Lilou",
            food: "crustaceans",
            size: 5.5,
            image: `images/leopard-wrasse-female-m.jpg` 
        },
        {
            id: 3,
            species: "Dragonface Pipefish",
            name: "Ryuu",
            food: "copepods",
            size: 8,
            image: `images/E8PPeNOVgAYdxG8.jpg`
        },
        {
            id: 4,
            species: "Gem Tang",
            name: "Sandy",
            food: "algae",
            size: 7,
            image: `images/Gem_Tang_9ec340db-e20c-490b-9bfd-79eb030ee429_grande.jpg`
        },
        {
            id: 5,
            species: "Emperor Angelfish",
            name: "Huangdi",
            food: "algae",
            size: 15,
            image: `images/Close-up-view-of-a-Juvenile-Emperor-angelfish.jpg`
        },
        {
            id: 6,
            species: "Black Storm Clownfish",
            name: "Panda",
            food: "zooplankton",
            size: 4,
            image: `images/black-storm-2.jpg`   
        },
        {
            id: 7,
            species: "Black Storm Clownfish",
            name: "Skunk",
            food: "zooplankton",
            size: 4,
            image: `images/DSC_0313_1000w.jpg`
        }
    ]
}