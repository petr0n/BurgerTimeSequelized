### Schema

CREATE DATABASE burgerTimeSequelDb;
USE burgerTimeSequelDb;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burgerName varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createAt TIMESTAMP DEFAULT NOW(),
	updatedAt TIMESTAMP DEFAULT NOW()
	PRIMARY KEY (id)
);
