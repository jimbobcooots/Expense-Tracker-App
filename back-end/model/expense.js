'use strict';

const uuid = require('uuid/v4');
const storage = require('../lib/storage');

module.exports = class Expense {
  constructor(config) {
    this._id = uuid();
    this.name = config.name;
    this.createdOn = new Date();
    this.category = [];
    this.description = config.description;
    this.amount = 0;
  }

  save() {
    return storage.save('Cars', this);
  }
    
  static findOne(_id) {
    return storage.get('Cars', _id);
  }

  static delete(_id) {
    return storage.delete('Cars', _id);
  }
};
