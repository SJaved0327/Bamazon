DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Catnip", "Pets", 1.00, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dry Food", "Pets", 10.00, 84);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Collar", "Pets", 25.00, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mug", "Home", 4.00, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Throw", "Home", 48.00, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Candles", "Home", 6.50, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blush", "Cosmetics", 8.00, 72);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nail Polish", "Cosmetics", 9.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eyeliner", "Cosmetics", 12.00, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Powder", "Cosmetics", 22.00, 34);


SELECT * FROM products;