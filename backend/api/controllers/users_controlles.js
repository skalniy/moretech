'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('Users');

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err)
      res.send(err);
    res.json(users);
  });
}
