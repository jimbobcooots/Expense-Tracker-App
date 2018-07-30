'use strict';

import mongoose from 'mongoose';/*eslint-disable-line*/
import bcrypt from 'bcrypt';/*eslint-disable-line*/
import crypto from 'crypto';/*eslint-disable-line*/
import jsonWebToken from 'jsonwebtoken';/*eslint-disable-line*/
import HttpErrors from 'http-errors';/*eslint-disable-line*/

const HASH_ROUNDS = 1;
const TOKEN_SEED_LENGTH = 50;

const accountSchema = mongoose.Schema({
  tokenSeed: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

accountSchema.methods.verifyPassword = function verifyPassword(password) {
  return bcrypt.compare(password, this.passwordHash)
    .then((result) => {
      if (!result) {
        throw new HttpErrors(401, 'ACCOUNT MODEL: Incorrect data');
      }
      return this;
    })
    .catch((err) => {
      throw new HttpErrors(500, `ERROR CREATING TOKEN: ${JSON.stringify(err)}`);
    });
};

accountSchema.methods.createToken = function createToken() {
  this.tokenSeed = crypto.randomBytes(TOKEN_SEED_LENGTH).toString('hex');
  return this.save()
    .then((updatedAccount) => {
      return jsonWebToken.sign({ tokenSeed: updatedAccount.tokenSeed }, process.env.SECRET_KEY);
    })
    .catch((err) => {
      throw err;
    });
};

const skipInit = process.env.NODE_ENV === 'development';

const Account = mongoose.model('accounts', accountSchema, 'accounts', skipInit);

// Create a new account
Account.create = (username, password, email) => {
  if (!username || !password || !email) throw new HttpErrors(400, 'missing form info');
  return bcrypt.hash(password, HASH_ROUNDS)
    .then((passwordHash) => {
      password = null; /*eslint-disable-line*/
      const tokenSeed = crypto.randomBytes(TOKEN_SEED_LENGTH).toString('hex');
      return new Account({
        username,
        passwordHash,
        email,
        tokenSeed,
      }).save();
    })
    .catch((err) => {
      throw err;
    });
};

export default Account;
