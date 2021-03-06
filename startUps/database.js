"use strict";
/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


/**
 * database connection setup-1
 * importing libraries: - 2
 * Get the mysql service from the library  -3
 * using an ORM framework ( object relational mapping framework) to call XAMPP DB -4
 * importing library for the environment variable in the .env file-5
 *  Add the credentials to access your database -6
 * exporting the connection to the database -7
 */

require('dotenv').config();  //-4 
  

//-5

const mysql = require('mysql') // -3
const { Sequelize } = require('sequelize'); 


//testing the connection to the db  -4
const connection = new Sequelize('reportaDB', "username", "password", {
    host: "192.168.64.2",
    dialect: 'mysql',
    pool: {
      max: 30,
      min: 0,
      acquire: 1000000,
      idle: 10000
  },
  define: {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
  }
    
  });




  module.exports = connection;   //-6

// try {
//     const con = mysql.createConnection({
//         host: "192.168.64.2",
//         user: "username",
//         password: "password",
//         database: 'reportaDB',
       
//     })
//     con.on('error', function(err) {
//         console.log(err.code); // example : 'ER_BAD_DB_ERROR'
//       });

    

// }catch(err){
//     console.error(err)
// }

// exports.connection = function(){
//            return con;
//             }
