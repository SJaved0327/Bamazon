const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "",
	database: "bamazonDB",
});

connection.connect((err) =>{
	if (err) throw err;

	console.log("* * * * * * * * * * * * * * * * * * *");
	console.log(`Welcome to Bamazon! What would you like to purchase?`);
	runCustomer();

});

function runCustomer() {
	
		inquirer
		    .prompt([
		    {
		      	name: "id",
		      	type: "input",
		      	message: "Enter the item id: ",
		      	validate: function(value) {
		          if (isNaN(value) === false) {
		            return true;
		          }
		          return false;
		        }
		    },
		    {
			 	name: "quantity",
		        type: "input",
		        message: "Enter the item quantitiy for purchase: ",
		        validate: function(value) {
		          if (isNaN(value) === false) {
		            return true;
		          }
		          return false;
		        }
		    }
		    ])
		    .then(function(answer) {
		    	
		    	let id = answer.id;
		    	let quantity = answer.quantity;

		    	connection.query("SELECT * FROM products WHERE ?", { item_id: id }, function(err, res) {
		      		
		      		if (err) throw err;

		      		var item = res[0];

		      		if (quantity < item.stock_quantity){

		      			var currentStock = item.stock_quantity - quantity;

		      			connection.query("UPDATE products SET ? WHERE ?",
		      				[
		      					{
		      						stock_quantity: currentStock
		      					},
		      					{
		      						item_id: item.item_id
		      					}
		      				], function(err) {
		      					if (err) throw err;
		      					var total = quantity * item.price;
		      					console.log("* * * * * Purchase Processed * * * * *");
		      					console.log(`You purchased ${quantity} of ${item.product_name}.`);
		      					console.log(`Your total is: $${total}. Thank you for shopping with Bamazon!`)
		      					console.log("-----------------------------------");
		      					runCustomer();
		      				});
        			}else{
		      			console.log("Sorry, there is not enough inventory for this purchase.");
		      			console.log("-----------------------------------");
		      			runCustomer();
		      		};

	        	});

		    });
};






