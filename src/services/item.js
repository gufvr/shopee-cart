async function createItem(itemName, itemPrice, itemQuantity) {
  return {
    itemName,
    itemPrice,
    itemQuantity,
    subtotal: () => itemPrice * itemQuantity,
  }
}

export default createItem
