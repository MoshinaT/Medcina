const express = require('express');
const router = express.Router();
const Joi = require('joi');
const accountService = require('./account.service');

// routes
router.get('/', getAll);
router.post('/', newVal);
router.get('/:id', getByVal);


module.exports = router;


function newVal(req, res, next) {
    console.log("hi reached",req.body)
    accountService.newVal(req.body)
        .then(accounts => res.json(accounts))
        .catch(next);
}

function getAll(req, res, next) {
    console.log("hi reached")
    accountService.getAll()
        .then(accounts => res.json(accounts))
        .catch(next);
}

function getByVal(req, res, next) {
    // users can get their own account and admins can get any account
  
    accountService.getByVal(req.params.val)
        .then(account => account ? res.json(account) : res.sendStatus(404))
        .catch(next);
}

