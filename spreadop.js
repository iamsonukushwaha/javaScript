// spread operator turns the elemnets of an array into arguments of a function call or into elements of an array literal.


let cats = ["miro", "jungle"];
let dogs = ["stella", "camper"];
let animals = ["smoky", "miro", "swimmy", cats, dogs];
console.log(animals);

let animals1 = ["smoky", "miro", "swimmy", ...cats, ...dogs];  //using spread operator ie three dots ...

console.log(animals1);

