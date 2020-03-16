const express = require("express");
const Router = express.Router();

// const {
//   getTransactions,
//   addTransaction,
//   deleteTransaction
// } = require("../controllers/transaction.controller");
const TransactionController = require("../controllers/transaction.controller");

Router.route("/getTransactions").get((req, res, next) =>
TransactionController.getTransactions(req, res, next));

Router.route("/addTransaction").post((req, res, next) =>
  TransactionController.addTransaction(req, res, next)
);

Router.route("/deleteTransaction/:id").delete((req, res, next) =>
    TransactionController.deleteTransaction(req, res, next)
);

module.exports = Router;
