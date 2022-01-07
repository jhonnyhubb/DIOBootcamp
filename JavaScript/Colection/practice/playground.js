/* const apple = {
    value: 2,
}
const orange = {
    value: 3,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const numbers = [1, 2];

console.log('this -> apple', mapWithThis(numbers, apple));

console.log('this -> orange', mapWithThis(numbers, orange));
*/
/*
function mapWhioutThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

console.log(mapWhioutThis(numbers));

console.log(mapWhioutThis(numbers))
*/
/*
function filterPairs(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 !== 0;
}

const myArray = [15, 23, 37, 44, 52, 63, 10, 28, 14, 56]

console.log(filterPairs(myArray));
*/
/*
function sumNumbers(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(sumNumbers(arr));
*/

const list = [
    {
        name: 'bean',
        price: 3,
    },
    {
        name: 'rice',
        price: 4,
    },
    {
        name: 'chiken',
        price: 36,
    },
    {
        name: 'soap',
        price: 2,
    },
    {
        name: 'shampoo',
        price: 12,
    },
];

const balanceAvailable = 100;

function calculateBalance(balanceAvailable, list) {
    return list.reduce(function(prev, current, index) {
        console.log("Round: ", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, balanceAvailable);
}

console.log(calculateBalance(balanceAvailable, list))