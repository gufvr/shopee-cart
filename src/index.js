import * as cartService from './services/cart.js'
import createItem from './services/item.js'

const myCart = []
const myWishlist = []

console.log('Welcome to your Shopee Cart!')

const item1 = await createItem('Hotwheels Ferrari', 20.99, 1)
const item2 = await createItem('Hotwheels Lamborghini', 39.99, 3)

await cartService.AddItemToCart(myCart, item1)
await cartService.AddItemToCart(myCart, item2)

await cartService.RemoveItemFromCart(myCart, item2)
await cartService.RemoveItemFromCart(myCart, item2)

// await cartService.RemoveItemFromCart(myCart, 1)

await cartService.displayCart(myCart)

// await cartService.DeleteItemFromCart(myCart, item2.itemName)
// await cartService.DeleteItemFromCart(myCart, item1.itemName)
await cartService.CalculateTotal(myCart)
