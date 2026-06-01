// Customer Array
let customers = [
{
    name: "John Smith",
    email: "john@gmail.com",
    purchases: ["Popcorn", "Pepsi"]
},
{
    name: "Poppy Lee",
    email: "poppy@gmail.com",
    purchases: ["Mint Ice Cream", "Milk Chocolate", "Whipped Cream"]
},
{
    name: "Kira Tracey",
    email: "kira@gmail.com",
    purchases: ["Peanuts", "Watermelon"]
}
                ];

// Adding a new customer
customers.push({
    name: "Mike Cerrel",
    email: "mike@gmail.com",
    purchases: ["Avocado", "Garlic"]
});

// Removing the first customer
customers.shift();

// Updating a customer's email
customers[0].email = "poppylee@gmail.com";

// Adding a new purchase
customers[2].purchases.push("Tangerines");