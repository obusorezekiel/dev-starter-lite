const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerificationToken: String,
    emailVerified: Boolean,
}, { timestamps: true });

userSchema.pre('save', function save(next) {
    const user = this;
    if (!user.isModified('password')){
        return next();
    }
    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, (err, hash) => {
            if(err){
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);