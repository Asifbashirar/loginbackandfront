const express = require('express');
const router= express.Router();
const contactForm=require('../controlers/contact-control');

router.route("/contact").post(contactForm)

module.exports=router;