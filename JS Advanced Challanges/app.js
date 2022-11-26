function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);

}
console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 0 },
    { id: 3, price: 600 },
  ])
);
