DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INTEGER(20) AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price INT(100) NOT NULL,
stock_quantity INT(100) NOT NULL,
PRIMARY KEY (id)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bananas", "produce", 1, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("diapers", "health and household", 4, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mp3 player", "produce", 29, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("keyboard", "electornics", 33, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("external harddrive", "electornics", 70, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apples", "produce", 1, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("book", "books", 7, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("basketball", "sports equipment", 23, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bed sheets", "health and household", 22, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("golf clubs", "sports equipment", 100, 20);

