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
	console.log(`connected as id ${connection.threadId}`);
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

		    	connection.query("SELECT * FROM products WHERE ?", { item_id: answer.id }, function(err, res) {
		      		
		      		console.log(res);
		      		console.log(res[0].item_id);

	        	});

		    });

};



/*
function FindItem(){

	connection.query("SELECT * FROM products", function(err, results) {





};
connection.query("SELECT * FROM products", function(err, results) {
 					
 					if (err) throw err;

 					var id = answer.id;
		      		var quantity = answer.quantity;
			    	var chosenItem;

		        	for (var i = 0; i < results.length; i++) {
		        	
		          		if (results[i].item_id === id) {
		            		
		            		chosenItem = results[i];

		          		}

		        	}

		        	console.log(chosenItem);

		        	
		        	//console.log(stock);

		        	//CheckInventory();
		        

		        });









function CheckInventory(){







};
*/


