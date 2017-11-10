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
		 	name: "quantitiy",
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
	      console.log("Hello!");
      	});
};

function petSearch(){


};

function homeSearch(){


};


function cosmeticsSearch(){


};





