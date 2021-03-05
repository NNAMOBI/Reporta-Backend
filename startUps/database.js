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
 * Get the mysql service -3
 * importing library for the environment variable in the .env file-4
 *  Add the credentials to access your database -5
 * exporting the connection to the database -6
 */

require('dotenv').config();  //-4 
const mysql = require('mysql');  // -3

//-5
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Kingdom2471984*',
    database : 'cms'
});



module.exports = {
    connection
}


