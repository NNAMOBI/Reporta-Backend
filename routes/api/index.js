
/*
 * Create route for all users  (Admin and general users )to register /api-1
   Create Oraganization route /api-2
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 
 //create Admin user route
const userRoute = require('./users');  //-1
const organizationRoute = require('./organization')
const authenticateTokenRoute = require('./organization') ; //route importation for change password
const loginRoute = require('./organization') //route to login admin


//export the route
module.exports = (app) => {
    app.use("/api/users", userRoute);   //-1 
    app.use("/api/organization", organizationRoute); //-2
    app.use("/api/authUser/token", authenticateTokenRoute);// route for organization  to change password
    app.use("/api/org", loginRoute) //login route
}


