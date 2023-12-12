import Table from 'cli-table3';
export default class Category {
    categorys = []

    constructor(categoryId, categoryName) {
        this.categoryId = categoryId
        this.categoryName = categoryName
    }
    // add category
    addCategory(product) {
        this.categorys.push(product)
    }
    //  display info
    displayInfo() {
        console.log(`
        Category ID : ${this.categoryId}
        Category : ${this.categoryName}
        `)
    }

    static createCategory(categoryId, categoryName) {
        return new Category(categoryId, categoryName)
    }
    // update category
    updateCategory() {
        this.categoryId
        this.categoryName

        console.log(`
        Category updated successfully!
        Category ID : ${this.categoryId}
        Category : ${this.categoryName}
        `)
    }

    // displays the category table
    products() {
        const table = new Table({
            head: ['Product ID', 'Product Name', 'Category', 'Price', 'Description'],
            colWidths: [20, 20, 20, 20, 20],
        });

        this.categorys.forEach(item => {
            table.push([item.productID, item.productName, this.categoryName, item.price, item.description]);
        });

        console.log('Item Category')
        console.log(table.toString());
    }




}