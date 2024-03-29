const products = [
  { name: "Laptop", price: 1000 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 500 },
  { name: "Headphones", price: 300 },
  { name: "Keyboard", price: 50 },
];

function getMostExpensiveProduct(products) {
  // Start coding here
  let maxPrice = 0;
  let maxObject;
  for (let key in products) {
    if (products[key].price > maxPrice) {
      maxObject = products[key];
    } return products[key];
  } 
}

getMostExpensiveProduct(products); // Output: { name: "Laptop", price: 1000 }