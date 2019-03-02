-- # src/constant/db-init.sql

CREATE DATABASE bearapp;
use bearapp;

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    createdAt DATETIME,
    updatedAt DATETIME,
    PRIMARY KEY (id)
);