
// include promise.js from leancloud's javascript-sdk
var Promise = require('./promise.js');

Promise.resolve = Promise.as;
Promise.reject = Promise.error;

module.exports = Promise;
