const myArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueValue(array){
    const mySet = new Set(array);

    return [...mySet]; // [...etc] change the object set to object array
}

console.log(uniqueValue(myArray));