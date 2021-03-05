/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */


const connection = require('./database');





// connect to mysql
connection.connect(function(err) {
    // in case of error
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
});




module.exports = {
    connection
}