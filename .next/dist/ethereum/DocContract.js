'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _DocumentContract = require('./build/DocumentContract.json');

var _DocumentContract2 = _interopRequireDefault(_DocumentContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
    return new _web2.default.eth.Contract(JSON.parse(_DocumentContract2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL0RvY0NvbnRyYWN0LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJEb2NKU09OIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQ3hCO1dBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ0gsS0FBSyxBQUFMLE1BQVcsMkJBQVEsQUFBbkIsQUFERyxZQUVILEFBRkcsQUFBUCxBQUlIO0FBTEQiLCJmaWxlIjoiRG9jQ29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiL2hvbWUveWFjaGludC9ERVBBX1JlYWN0In0=