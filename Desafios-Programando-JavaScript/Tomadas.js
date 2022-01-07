let lines = gets().split("\n");

let line = lines.shift().split(' ');

const reducer = (accumulator, currentValue) => {
    return (accumulator += Number(currentValue))
  }
  
  const Sum = line.reduce(reducer, 0)
  const sockets = Sum - line.length + 1
  console.log(sockets)