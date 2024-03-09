const express = require('express');
const router=express.Router();
const authControllers =require('../controlers/auth-control');
const signUpSchema = require('../validator/auth-validator')
const vailidate=require('../middlewares/vailidate-middleware');
// router.get('/',(req,res)=>{
//     res.send('Hello World from router');
// });

router.route('/').get(authControllers.home);

router.route('/register').post(vailidate(signUpSchema), authControllers.register)

router.route('/login').post(vailidate(signUpSchema), authControllers.login)

module.exports=router;