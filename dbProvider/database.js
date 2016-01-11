var mongoose = require('mongoose');

module.exports = function(databaseConfig){
   
    /*
    var options = {
      db: { 
      	native_parser: true
      },
      server: { 
      	poolSize: 5,  
      	socketOptions: { keepAlive: 120 }	
      },  
      user: databaseConfig.username,
      pass: databaseConfig.password 
    }
    */
    
    ////ESTABLISH CONNECTION
    mongoose.connect(databaseConfig.connectionString);
    
    var db = mongoose.connection;
    
    ////ON CONNECTION ERROR
    db.on('error', console.error.bind(console, 'Error while connection to ' + databaseConfig.connectionString));
    
    ////ON CONNECTION OPEN
    db.once('open', function() {  
      console.log("Connection is established to " + databaseConfig.connectionString); 
    });
    
    db.on('disconnected', function() {  
      console.log("Connection is closed from " + databaseConfig.connectionString); 
    });
}