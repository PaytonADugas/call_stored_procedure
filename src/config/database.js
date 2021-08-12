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

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = sequelize;
