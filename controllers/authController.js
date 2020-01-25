const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');


exports.getLogin = (req,res,next) => {
    res.render('login', {
        path: '/login',
        pageTitle: 'Login'
    });
}


exports.postLogin = (req, res, next) => {

}

exports.getRegister = (req,res,next) => {
    res.render('register', {
        path: '/register',
        pageTitle: 'Register'
    });
}

exports.postRegister = async (req,res,next) => {

    const validationErrors = [];
    if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' });
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' });
  
    if (validationErrors.length) {
      req.flash('errors', validationErrors);
      return res.redirect('/signup');
    }
    req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

    



}

exports.getForgotPassword = (req,res,next) => {
    res.render('forgot-password');
}
