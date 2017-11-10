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
	runCustomer();
});

function runCustomer() {
	inquirer
	    .prompt({
	      name: "buy",
	      type: "list",
	      message: "What department are you browsing?",
	      choices: [
	        "Pets",
	        "Home",
	        "Cosmetics"
	      ]
	    })
	    .then(function(answer) {
	      switch (answer.buy) {
	        case "Pets":
	          petsSearch();
	          break;

	        case "Home":
	          homeSearch();
	          break;

	        case "Cosmetics":
	          cosmeticsSearch();
	          break;
      	}
   	});
}