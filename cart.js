import Table from 'cli-table3';
export default class Cart {

    constructor() {
        this.cartId = Math.floor(Math.random() * 1000); // Contoh penggunaan ID acak untuk cart
        this.items = [];
    }
    //add to cart
    addItem(product, categoryName, description, price, quantity) {
        this.items.push({
            cartId: this.cartId,
            product,
            categoryName,
            description,
            price,
            quantity
        });
    }
    //removeItem
    deleteItem(product) {
        console.log('Delete completed!')
        this.items = this.items.filter(item => item.product !== product)

    }
    //display the cart table
    viewCart() {
        const table = new Table({
            head: ['Product Name', 'Category', 'Price', 'Description'],
            colWidths: [20, 20, 20, 20, ],
        });

        this.items.forEach(item => {
            table.push([item.product, item.categoryName, item.price, item.description]);
        });

        console.log('Item Cart')
        console.log(table.toString());
        return this.items;
    }



}