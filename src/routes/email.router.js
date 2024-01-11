const { getAll, email, contactEmail } = require('../controllers/email.controllers');
const express = require('express');

const emailRouter = express.Router();

emailRouter.route('/emails')
    .post(email)

emailRouter.route('/emails/contact')
    .post(contactEmail);

module.exports = emailRouter;