import { Sequelize } from 'sequelize';

var server = 'aggregatesqlserver.database.windows.net'
var database = 'AGGREGATEDEVDB'
var username = 'sqladmin'
var password = 'LoveYourNeighbor!'
var driver= '{ODBC Driver 17 for SQL Server}'

const sequelize = new Sequelize(database, username, password, {
  host: server,
  dialect: "mssql"
});

module.exports = sequelize;
