class Product {

    id: string;
    categories: Category[];
    name: string;
    qty: number;
    price: number;

    constructor(id: string, categories: Category[], name: string, qty: number, price: number) {
        this.id = id;
        this.categories = categories;
        this.name = name;
        this.qty = qty;
        this.price = price;
      }
}