/**
 * Name: NNAMDI OSUAGWU
 * StudentId: 1013007
 * CourseCode: CMM004
 * Course: Software Engineering Project
 * 
 */



/**
 * server setup-1
 * installing libraries: - 2
 * initializing the port No -3
 * Middleware to parse data from the frontend to the body of the request- 4
 * calling the route that performs the model and controller in the MVC -5
 
 */

 

//importing / importing libraries-2
const express = require('express');
const app = express();
const {port} = require("./config");    // -3

// Invoking All routes  -5
require('./routes/api')(app);



//middleware to parse data in the body of the request  -4
app.use(express.json());   //4
app.use(express.urlencoded({extended: false}));










// starting the node server  -1
const startServer = async () => {
    app.listen(port, (err) => {
        if (err) {
            // logger.log(err.message);
            console.log(err.message);
            process.exit(1);
        }
        console.log('info', `Server now listening on port  ${port}`)
        // logger.log('info', `Server now listening on port  ${port}`);
    });
};
startServer();