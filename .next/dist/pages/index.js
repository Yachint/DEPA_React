'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Accounts = require('../ethereum/Accounts');

var _Accounts2 = _interopRequireDefault(_Accounts);

var _requestCard = require('../components/requestCard');

var _requestCard2 = _interopRequireDefault(_requestCard);

var _DocContract = require('../ethereum/DocContract');

var _DocContract2 = _interopRequireDefault(_DocContract);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/pages/index.js?entry';


var AccountIndex = function (_Component) {
    (0, _inherits3.default)(AccountIndex, _Component);

    function AccountIndex() {
        (0, _classCallCheck3.default)(this, AccountIndex);

        return (0, _possibleConstructorReturn3.default)(this, (AccountIndex.__proto__ || (0, _getPrototypeOf2.default)(AccountIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(AccountIndex, [{
        key: 'renderCards',
        value: function renderCards() {
            return this.props.dataItems.map(function (item) {
                _react2.default.createElement(_requestCard2.default, {
                    fname: item.fname,
                    lname: item.lname,
                    address: item.address,
                    docs: item.docs,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props.dataItems);
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.props.userAccounts[0], '+++++', this.test, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.renderCards()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var userAccounts, test, arr;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _Accounts2.default.methods.getDeployedAccounts().call();

                            case 2:
                                userAccounts = _context2.sent;
                                _context2.next = 5;
                                return _promise2.default.all(userAccounts.map(function () {
                                    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(addr) {
                                        var acc, firstName, lastName, documents, item;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        acc = (0, _DocContract2.default)(addr);
                                                        _context.next = 3;
                                                        return acc.methods.firstName().call();

                                                    case 3:
                                                        firstName = _context.sent;
                                                        _context.next = 6;
                                                        return acc.methods.lastName().call();

                                                    case 6:
                                                        lastName = _context.sent;
                                                        _context.next = 9;
                                                        return acc.methods.getDocumentsLength().call();

                                                    case 9:
                                                        documents = _context.sent;
                                                        item = {
                                                            fname: firstName,
                                                            lname: lastName,
                                                            address: addr,
                                                            docs: documents
                                                        };
                                                        return _context.abrupt('return', item);

                                                    case 12:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x) {
                                        return _ref2.apply(this, arguments);
                                    };
                                }()));

                            case 5:
                                arr = _context2.sent;
                                return _context2.abrupt('return', { dataItems: arr, userAccounts: userAccounts });

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return AccountIndex;
}(_react.Component);

exports.default = AccountIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWNjRmFjdG9yeSIsIlJlcXVlc3RDYXJkIiwiRG9jQ29udHJhY3QiLCJDYXJkIiwiQnV0dG9uIiwiQWNjb3VudEluZGV4IiwicHJvcHMiLCJkYXRhSXRlbXMiLCJtYXAiLCJpdGVtIiwiZm5hbWUiLCJsbmFtZSIsImFkZHJlc3MiLCJkb2NzIiwiY29uc29sZSIsImxvZyIsInVzZXJBY2NvdW50cyIsInRlc3QiLCJyZW5kZXJDYXJkcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEFjY291bnRzIiwiY2FsbCIsImFsbCIsImFkZHIiLCJhY2MiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldERvY3VtZW50c0xlbmd0aCIsImRvY3VtZW50cyIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFNOzs7Ozs7O0ksQUFFVDs7Ozs7Ozs7Ozs7c0NBNEJXLEFBQ1Q7d0JBQU8sQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLGdCQUFRLEFBQ3BDO2dDQUFBLEFBQUM7MkJBQ00sS0FEUCxBQUNZLEFBQ1o7MkJBQU8sS0FGUCxBQUVZLEFBQ1o7NkJBQVMsS0FIVCxBQUdjLEFBQ2Q7MEJBQU0sS0FKTixBQUlXOztrQ0FKWDtvQ0FBQSxBQU1IO0FBTkc7QUFDQTtBQUZKLEFBQU8sQUFRVixhQVJVOzs7O2lDQVVGLEFBQ0w7b0JBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxhQUFBLE9BQ0ssQUFBSyxNQUFMLEFBQVcsYUFEaEIsQUFDSyxBQUF3QixJQUV4QixjQUhMLEFBR1UsQUFDTixzQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUxSLEFBQ0ksQUFJSSxBQUNLLEFBQUssQUFJckI7Ozs7Ozs7Ozs7Ozs7O3VDQWpEOEIsbUJBQUEsQUFBVyxRQUFYLEFBQW1CLHNCLEFBQW5CLEFBQXlDOztpQ0FBOUQ7QTs7eURBSVksQUFBUSxpQkFBSSxBQUFhLGdCQUFiO3lIQUFpQixpQkFBQSxBQUFNLE1BQU47aUZBQUE7c0dBQUE7c0RBQUE7aUZBQUE7eURBQ3ZDO0FBRHVDLDhEQUNqQywyQkFEaUMsQUFDakMsQUFBWTt3RUFEcUI7K0RBRXJCLElBQUEsQUFBSSxRQUFKLEFBQVksWUFGUyxBQUVyQixBQUF3Qjs7eURBQTFDO0FBRnVDLDZFQUFBO3dFQUFBOytEQUd0QixJQUFBLEFBQUksUUFBSixBQUFZLFdBSFUsQUFHdEIsQUFBdUI7O3lEQUF4QztBQUh1Qyw0RUFBQTt3RUFBQTsrREFJckIsSUFBQSxBQUFJLFFBQUosQUFBWSxxQkFKUyxBQUlyQixBQUFpQzs7eURBQW5EO0FBSnVDLDZFQUtyQztBQUxxQzttRUFLOUIsQUFDRixBQUNQO21FQUZTLEFBRUQsQUFDUjtxRUFIUyxBQUdDLEFBQ1Y7a0VBVHVDLEFBSzlCLEFBSUY7QUFKRSxBQUNUO3lGQU51QyxBQVdwQzs7eURBWG9DO3lEQUFBO3dFQUFBOztBQUFBO29EQUFBO0FBQWpCOzt5REFBQTtpRUFBQTtBQUFBO0EsQUFBWixtQ0FBWSxDQUFaOztpQ0FBWjtBO2tFQW1CQyxFQUFFLFdBQUYsQUFBYyxLQUFLLGNBQW5CLEEsQUFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QnRCLEEsQUFzRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9