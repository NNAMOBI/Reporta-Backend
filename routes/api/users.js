


const router = require('express').Router();
const userController = require('../../app/users/userController');


router.get('/', userController.createUser);





module.exports = router;