var mysql = require("mysql");

var inquirer = require("inquirer");

var Table = require('cli-table');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "bamazon_db"
});

var productArray = [];

connection.query("SELECT * FROM products", function(err, res) {

	if (err) throw err;

	// check to see if connected

	console.log("connected as id " + connection.threadId);

	// make a table
	
	var table = new Table({
		head: ['item id', 'product', 'department', 'price', 'quantity' ]
		, colWidths: [5, 20, 25, 10, 10]
	}); 



	
	for (var i =0; i < res.length; i++) {
		// console.log(res[i].id + " | " + res[i].product_name + " | department: " + res[i].department_name + " | price: " + res[i].price + " | amount: " + res[i].stock_quantity);
		
		table.push(
		[res[i].id,res[i].product_name,res[i].department_name,"$"+res[i].price,res[i].stock_quantity]
	);
		// push products to global array
		productArray.push(res[i].id,res[i].product_name,res[i].department_name,"$"+res[i].price,res[i].stock_quantity);

	}

	// send to CL
	console.log(table.toString());

	// instantiate inquirer
	start();
});

		


function start() {
	inquirer.prompt ([
		{
			name: "id",
			type: "input",
			message: "What is the id of your desired product?"
		},

		{
			name: "amount",
			type: "input",
			message: "What amound do you want to purchase?"
		}
]).then(function(answer) {
	var chosenId = parseInt(answer.id);
	var amount = parseInt(answer.amount);
	console.log(chosenId + " " + amount);


	var updatedAmount = (productArray[chosenId-1][4] - amount);

	connection.query(
		"UPDATE products SET ? WHERE ?",
	   [
		{
			stock_quantity: updatedAmount
		},
		{
			id: chosenId
		}
	   ]);


});

};
