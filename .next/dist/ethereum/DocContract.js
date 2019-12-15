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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxEb2NDb250cmFjdC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiRG9jSlNPTiIsImFkZHJlc3MiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQW9CLEFBQXBCLEFBRUE7Ozs7OztrQkFBZSxVQUFDLEFBQUQsU0FBYSxBQUN4QjtXQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNILEtBQUssQUFBTCxNQUFXLDJCQUFRLEFBQW5CLEFBREcsWUFFSCxBQUZHLEFBQVAsQUFJSDtBQUxEIiwiZmlsZSI6IkRvY0NvbnRyYWN0LmpzIiwic291cmNlUm9vdCI6Ikc6L0RFUEFfUmVhY3QifQ==