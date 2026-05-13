const express = require('express');
const produtoController = require('../controllers/produtoController');

module.exports = (app) => {
    app.use(express.json());
    app.use('/produtos', produtoController);
};