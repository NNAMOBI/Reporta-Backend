/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * Importing database connection setup-1
 * Get the mysql service from the library  -3
 * using an ORM framework (object relational mapping framework) to call XAMPP DB -4
 * importing library for the environment variable in the .env file-5
 *  Add the credentials to access your database -6
 * exporting the connection to the database -7
 */


const connection = require('./database');  //-1



connection
.authenticate()
.then(() => {
  console.log('info',`Connection has been established successfully.`);
})
.catch(err => {
  console.log('error',`Unable to connect to the database:`);
});


module.exports =  {
  connection
}

// connection.connect((err) => {
//   if(err){
//       console.log('Error connecting to Db',err)
//       // return;
//   }
//   console.log('connection established');
// })




module.exports = {
    connection
}

