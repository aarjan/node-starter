const User = require('../models/User');
const {validationResult} = require('express-validator/check');

exports.postLogin = (req, res) => {
  console.log(req.url,req.body, req.params)
  const errs = validationResult(req);
  if (!errs.isEmpty()) {
    return res.status(422).json({error:errs.array()})
  }
  User.create({
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json())
  .catch(err => res.json({error: JSON.stringify(err)}));
};