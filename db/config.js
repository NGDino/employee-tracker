// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '$ubarU420',
  database: 'dinocorp'
});

connection.connect(err => {
    if (err) throw err;
    console.log(`
    
    connected as id ` + connection.threadId);
     });
     

module.exports = connection