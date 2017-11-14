# Welcome to Bamazon!

## How to use the application

1. Inquirer will prompt the user to enter the id of the item they are looking to purchase.

2. Inquirer will prompt the user to enter the purchase quantity of this item.

3. The Bamazon app will match the id input to the item_id of items in our database:
	
	* If the id matches to that of an item in our database, the app will move forward with the purchase.

		* Else the user will receive direction to try again as the item does not exist.

4. The Bamazon app will compare the purchase quantity against the stock_quantity of the item in our database:
	
	* If the purchase quantity is less than the stock_quantity of the item in our database, then the purchase is viable.

		* Else the user will receive direction to try again as there is insufficient stock available.

5. The Bamazon app will 'withdraw' inventory to match the purchase quantity and update the new stock_quantity of the item.

6. The Bamazon app will alert the user that the purchase was successful and calculate the cost of the purchase order.

7. Thank you for shopping with Bamazon!

