const Transaction = require("../models/Transaction.model");
const responseHandler = require('../helpers/response-handler.helper');

class TransactionController {

  async getTransactions(req, res) {
    try {
      const transactions = await Transaction.find();
      return responseHandler(res, transactions);
    } catch (err) {
      return responseHandler(res, null, err);
    }
  }

  async addTransaction(req, res) {
    try {
      const { description, amount } = req.body;
      const newTransaction = { description, amount };

      const createdTransaction = await Transaction.create(newTransaction);

      return responseHandler(res, createdTransaction);
    } catch (err) {
      return responseHandler(res, null, err);
    }
  }

  async deleteTransaction(req, res) {
    try {
      const id = req.params.id;
      if (!id) throw new Error("ID required for delete");

      const deletedTransaction = await Transaction.deleteOne({ _id: id });
      
      if(deletedTransaction.deletedCount === 0) {
          throw new Error('Record Doesn\'t Exist');
      }

      return responseHandler(res, deletedTransaction);
    } catch (err) {
      return responseHandler(res, null, err);
    }
  }

}

module.exports = new TransactionController();
