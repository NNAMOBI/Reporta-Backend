/*
 * Create User route /api-1
   Create Oraganization route /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 //create user route
const userRoute = require('./users');  //-1
const organizationRoute = require('./organization')







//export the route
module.exports = (app) => {
    app.use("/api/users", userRoute);   //-1 
    app.use("/api/organization", organizationRoute); //-2
    
}
