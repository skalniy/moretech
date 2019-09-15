'use strict';

const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');
//const Answer = mongoose.model('Answer');

exports.getPolls = (req, res) => {
  Poll.find({ partitipants: req.user.id }, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
}

exports.addPoll = (req, res) => {
  Poll.insertMany([req.poll], (err, polls) => {
    if (err)
      res.send(err);
    res.sendStatus(200);
  });
}

exports.updatePoll = (req, res) => {
  Poll.update({ id: req.poll.id }, req.poll, (err, poll) => {
    if (err)
      res.send(err);
    res.sendStatus(200);
  });
}

exports.addAnswer = (req, res) => {
  Answer.insertMany([req.answer], (err, answer) => {
    if (err)
      req.send(err);
    Poll.update(
      { id: req.answer.pollid },
      { $addToSet: { answers: req.answer.id } },
      (err, poll) => {
        if (err)
          res.send(err);
        res.sendStatus(200);
      });
  });
}

exports.updateAnswer = (req, res) => {
  Answer.update({ id: req.answer.id }, req.answer, (err, answer) => {
    if (err)
      res.send(err);
    res.sendStatus(200);
  });
}
