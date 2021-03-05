/*
 * Create User route /api-1
 * @param req
 * @param res
 * @param next
 * @returns {Promise<void>}
 */

 //create user route
const userRoute = require('./users');  //-1







//export the route
module.exports = (app) => {
    app.use("/api/users", userRoute);
    
}
