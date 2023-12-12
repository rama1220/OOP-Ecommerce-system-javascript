import Product from "./product.js";
import Category from "./category.js";
import Cart from "./cart.js";
import Order from "./oder.js";

//create category
const sabuncuci = Category.createCategory(11, 'sabun cuci')
const sabunmandi = Category.createCategory(12, 'sabun mandi')

//create product
const rinso = Product.createProduct(1, 'rinso', 3000, 'sabun cuci baju')
const lifeboy = Product.createProduct(2, 'lifeboy', 2000, 'sabun mandi anak')
const nuvo = Product.createProduct(3, 'nuvo', 4000, 'sabun mandi herbal')

//add to category
sabuncuci.addCategory(rinso)
sabunmandi.addCategory(lifeboy)
sabunmandi.addCategory(nuvo)

//see the products in the category
sabuncuci.products()
sabunmandi.products()

//update product
rinso.updateProduct(1, 'rinso pemutih', 4000, 'sabun pemutih baju');


// add item to cart
const cart = new Cart()
cart.addItem(rinso.productName, sabuncuci.categoryName, rinso.description, rinso.price, 1)
cart.addItem(nuvo.productName, sabunmandi.categoryName, nuvo.description, nuvo.price, 2)
cart.addItem(lifeboy.productName, sabunmandi.categoryName, lifeboy.description, rinso.price, 5)

//delete Item froma Cart
cart.deleteItem(rinso.productName)

//Detail order
const order = Order.createOrder(cart)
order.displayOrderDetails()