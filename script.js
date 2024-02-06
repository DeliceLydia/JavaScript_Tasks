const items = [
  {name: 'Bike', price:100},
  {name: 'TV', price:200},
  {name: 'Album', price:10},
  {name: 'Book', price:5},
  {name: 'Phone', price:500},
  {name: 'Computer', price:1000},
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const cheapProduct = items.filter((product) => product.price <= 10);
console.log(cheapProduct)

// 2. Filter and show the product that will be expensive in the array
const expensiveProduct = items.filter((product) => product.price >= 500);
console.log(expensiveProduct)

// 3. Calculate the full price of all products combined
const Price = items.reduce((fullPrice, product) => {return fullPrice + product.price}, 0)
console.log(Price)

// 4. Calculate the full price of all products combined and remove products that are under $10
let underPrice = items.filter((product) => product.price > 10);
const full_price = underPrice.reduce((fullPrice, product) => {return fullPrice + product.price}, 0)
console.log(full_price)


// 5. Filter and show the product that will be start with letter b at first postion
const filterProduct = items.filter((product) => product.name.charAt(0).toLowerCase() === 'b');
console.log(filterProduct)