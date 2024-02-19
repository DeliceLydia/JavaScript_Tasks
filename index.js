const colors = ['red', 'green', 'blue', 'black','yellow', 'orange'];
// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
console.log(colors.join(','))

// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
console.log(colors.splice(1, 2, 'purple', 'pink'))

// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
console.log(colors.copyWithin(0, 1, 4))

// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.
console.log(colors.toString().toUpperCase());


// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const findElement = (colors) => {
  let str = colors.toString();
  return str.includes('b');
}
console.log(colors.find(findElement));


// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
const selectedColors = colors.slice(1, 4);
console.log(selectedColors)
