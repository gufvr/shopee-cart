async function AddItemToCart(userCart, item) {
  userCart.push(item)
}

async function CalculateTotal(userCart) {
  console.log('\nShopee Cart total is:')

  const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
  console.log(`🛒 Total: R$ ${result}`)
}

async function DeleteItemFromCart(userCart, itemName) {
  const index = userCart.findIndex((item) => item.itemName === itemName)

  if (index !== -1) {
    userCart.splice(index, 1)
  }
}

async function RemoveItemFromCart(userCart, index) {}

async function displayCart(userCart) {
  console.log('\nShopee cart list: ')
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}.${item.itemName} - R% ${item.itemPrice} | ${
        item.itemQuantity
      }x | Subtotal = R$ ${item.subtotal()}`
    )
  })
}

export {
  AddItemToCart,
  CalculateTotal,
  DeleteItemFromCart,
  RemoveItemFromCart,
  displayCart,
}
