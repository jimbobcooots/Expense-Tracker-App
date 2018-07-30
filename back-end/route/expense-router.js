'use strict';

const Expense = require('../model/expense');
const logger = require('../lib/logger');
const customResponse = require('../lib/response');

module.exports = (router) => {
  router.post('/api/v1/expense', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-EXPENSE: POST /api/v1/expense');
    const newExpense = new Expense(request.body);
    newExpense.save()
      .then((expense) => {
        customResponse.sendJSON(response, 200, expense);
        return undefined;
      })
      .catch((err) => {
        logger.log(logger.INFO, `ROUTE EXPENSE: There was a bad request ${JSON.stringify(err.message)}`);
        customResponse.sendError(response, 400, err.message);
        return undefined;
      });
  });

  // /api/v1/expense?id=123
  router.get('/api/v1/expense', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-EXPENSE: GET /api/v1/expense');

    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an id');
      return undefined;
    }

    Expense.findOne(request.url.query.id)
      .then((expense) => {
        customResponse.sendJSON(response, 200, expense);
      })
      .catch((err) => {
        customResponse.sendError(response, 404, err.message);
      });
    return undefined;
  });

  router.delete('/api/v1/expense', (request, response) => {
    logger.log(logger.INFO, 'ROUTE-EXPENSE: DELETE /api/v1/expense');

    if (!request.url.query.id) {
      customResponse.sendError(response, 404, 'Your request requires an id');
      return undefined;
    }

    Expense.deleteOne(request.url.query.id)
      .then((expenseId) => {
        customResponse.sendJSON(response, 204, expenseId);
      })
      .catch((err) => {
        customResponse.sendError(response, 404, err.message);
      });
    return undefined;
  });
};
