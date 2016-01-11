

var configDatabaseName = "books";
var configDatabaseServer = "localhost";
var configDatabaseServerPort = "27017";

var databaseUsername = 'admin';
var databasePassword = 'pass'

////MONGO DATABASE
var databaseConnectionUri = 'mongodb://'+ configDatabaseServer + ':' + configDatabaseServerPort +'/' + configDatabaseName;

var databaseConfig = {
	databaseName: configDatabaseName,
	databaseServer: configDatabaseServer,
	databaseServerPort: configDatabaseServerPort,
	username: databaseUsername,
	password: databasePassword,
	connectionString: databaseConnectionUri
};

module.exports = databaseConfig;