const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true},
    password: {type: String},
    passwordResetToken: String,
    passwordResetExpires: Date,
    
    profile: {
        name: String,
        gender : String,
        location: String,
        picture: String
    }
},{timestamps: true});


// Pre save hook for hashing new password
userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) { return next()}
    bcrypt.genSalt(10,(err,salt) => {
        if (err) return next(err);
        bcrypt.hash(usr.password, salt,(err,hash)=> {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword,cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

const User = mongoose.model('user',userSchema);

module.exports = User;
