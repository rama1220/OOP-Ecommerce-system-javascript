import Table from 'cli-table3';

export default class Order {
    constructor() {

        this.orderId = Math.floor(Math.random() * 1000);
        this.items = [];
        this.totalAmount;
    }
// create order
    static createOrder(cart) {

        const orderInstance = new Order();
        orderInstance.items = [...cart.viewCart()];
        orderInstance.totalAmount = orderInstance.calculateTotalAmount();
        return orderInstance;

    }

    // calculate total
    calculateTotalAmount() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    // display the order cart
    displayOrderDetails() {
        const table = new Table({
            head: ['Product Name', 'Category Product', 'Desription', 'Price', 'Quantity', 'Total'],
            colWidths: [20, 20, 20, 10, 10, 10],
        });

        
        this.items.forEach(item => {
            table.push([item.product, item.categoryName, item.description, item.price, item.quantity, item.price*item.quantity]);
        });


        console.log('Order List')
        console.log(table.toString());

        console.log("Order ID:", this.orderId);
        console.log("Total Amount:", this.totalAmount);
    }
}