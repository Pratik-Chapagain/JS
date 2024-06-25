const marvel_heroes = ["thor", "ironman", "deadpool"]
const dceu_heroes = ["superman" , "batman" , "joker"]

//marvel_heroes.push(dceu_heroes)
//console.log(marvel_heroes)

const all_new_heroes = [...marvel_heroes, ...dceu_heroes]

console.log(all_new_heroes);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("pratik"))
console.log(Array.from("pratik"))
console.log(Array.from({name: "pratik"}))


