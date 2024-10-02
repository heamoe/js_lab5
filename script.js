// Challenge 1
const getCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

// Challenge 2
const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(minMax([1, 2, 3, 4, 5]));

// Challenge 3
((length, width) => {
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length * width}.`);
})(10, 5);