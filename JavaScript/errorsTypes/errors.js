function checkArray(array, number){
    try{
    if(!array && !number) throw new ReferenceError("send the paramaters!!!");
    if(typeof array !== 'object') throw new TypeError("Array needs to be an object");
    if(typeof number !== 'number') throw new TypeError("Number needs to be a number");
    if(array.length !== number) throw new RangeError("Size invalide");

    return array;
    }

    catch(e){
        if(e instanceof ReferenceError) {
            console.log("this is a reference error")
            console.log(e.message);
        } else if(e instanceof TypeError) {
            console.log("this is a type error")
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log("this is a range error")
            console.log(e.message);
        } else {
            console.log("this error isn't expected!:" + e);
        }
    }
}

checkArray(oi, 3)