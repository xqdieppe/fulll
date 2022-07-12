const { promisify } = require('util');
const { readFileSync } = require('fs');
const { parse } = require('yaml');

const mysql = require('mysql');

const credentials = parse(readFileSync('./configuration/mysql.yaml', 'utf-8'));  

var connection = mysql.createConnection(credentials);
connection.connect(); 

connection.query = promisify(connection.query);
module.exports = connection;
