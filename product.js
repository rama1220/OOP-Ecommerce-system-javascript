export default class Product {

    constructor(productID, productName, price, description) {
        this.productID = productID
        this.productName = productName
        this.price = price
        this.description = description
    }
    //displays product details
    displayinfo() {
        console.log(`
    Product Id : ${this.productID} 
    Product Name : ${this.productName} 
    Price : ${this.price} 
    Description : ${this.description}`)
    }
    //create product
    static createProduct(productID, productName, price, description) {
        return new Product(productID, productName, price, description)
    }
    // update product
    updateProduct(productID, productName, price, description) {
        this.productID = productID
        this.productName = productName
        this.price = price
        this.description = description

        console.log(`
    data updated successfully!
    Product Id : ${this.productID} 
    Product Name : ${this.productName} 
    Price : ${this.price} 
    Description : ${this.description}`)

    }


}

