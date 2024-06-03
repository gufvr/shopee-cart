async function AddItemToCart(userCart, item) {
  userCart.push(item)
}

async function CalculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  console.log(result);
}

async function DeleteItemFromCart(userCart, itemName) {}

async function RemoveItemFromCart(userCart, index) {}

export { AddItemToCart, CalculateTotal, DeleteItemFromCart, RemoveItemFromCart }
