const restaurant = {
    name: "Bob's Burgers",
    orderNumber: 1,
    // Define a function to represent the behavior of placing an order. It should accept one argument named meal. This argument will be an object. There is starter code provided.
    placeOrder: function (meal) {
        // this.orderNumber++;
        let orderNumber = this.orderNumber++;
        let sandwich = meal.sandwichType;
        let fries = meal.fries ? "" : "no ";
        let drinkSize = meal.drinkSize;

        this.orders.push(`Order #${orderNumber}: ${sandwich} sandwich, with ${fries}fries and a ${drinkSize} drink`)
    },
    // The object should have a property named orders that is an array. You will need to define this.
    orders: [], 
    // Define a function to represent the behavior of getting all orders. It should return the order property (hint: this). You will need to define this.
    getAllOrders: function (){
        return this.orders;
    }
};

// Each meal object should have three properties: sandwichType, fries (true or false), and drinkSize.
const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true, 
    drinkSize: "large"
};

const beefComboMeal = {
    sandwichType: "beef",
    fries: true, 
    drinkSize: "small"
};

const porkComboMeal = {
    sandwichType: "pork",
    fries: false, 
    drinkSize: "medium"
};

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(beefComboMeal);
restaurant.placeOrder(porkComboMeal);

// Invoke the function to return the list of all orders
let allOrders = restaurant.getAllOrders();
// Output all orders to the console using console.table()
console.table(allOrders); 





