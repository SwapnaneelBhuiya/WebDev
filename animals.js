let origDogs=new Array("Bulldog", "beagle","Labrador");
let cats=new Array("American Curl","Bengal");
let birds=new Array("Falcons","Ducks","Flamingoes");

//Arraycopyelements
let slicesDogs=origDogs.slice(1,2);
let copyDogs=[...origDogs];
let dogs=origDogs.slice(0);

let pushDog=dogs.push("Golden Retriever");
let popDog=dogs.pop();
dogs[dogs.length]="Poodle";

//add and remove from first
let addFirst=dogs.unshift("Golden Retriever");
let shiftDog=dogs.shift();
//atomic add and remove elements(where how many to remove element list)
dogs.splice(2,1,"Pugs","Boxe");

//ArrayFuncs
let animals=dogs.concat(cat, birds);
let newAnimal=[...dogs,...cats,...birds].toString();
let sortDog=dogs.slice(0).sort();
function scanArray([first])