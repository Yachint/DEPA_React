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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

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
            return this.props.dataItems.map(function (item, index) {
                return _react2.default.createElement(_requestCard2.default, {
                    key: index,
                    fname: item.fname,
                    lname: item.lname,
                    address: item.address,
                    docs: item.docs,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 39
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            //console.log(this.props.dataItems);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'DEPA Accounts'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_routes.Link, { route: '/accounts/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Sign up',
                icon: 'add circle',
                primary: true,
                floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/accounts/uploadNew', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Deposit Files',
                icon: 'upload',
                secondary: true,
                floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var userAccounts, arr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWNjRmFjdG9yeSIsIlJlcXVlc3RDYXJkIiwiRG9jQ29udHJhY3QiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIkxpbmsiLCJBY2NvdW50SW5kZXgiLCJwcm9wcyIsImRhdGFJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZuYW1lIiwibG5hbWUiLCJhZGRyZXNzIiwiZG9jcyIsInJlbmRlckNhcmRzIiwibWV0aG9kcyIsImdldERlcGxveWVkQWNjb3VudHMiLCJjYWxsIiwidXNlckFjY291bnRzIiwiYWxsIiwiYWRkciIsImFjYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZ2V0RG9jdW1lbnRzTGVuZ3RoIiwiZG9jdW1lbnRzIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O3NDQTRCVyxBQUNUO3dCQUFPLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFNLE9BQVUsQUFDNUM7dUNBQU8sQUFBQzt5QkFBRCxBQUNGLEFBQ0w7MkJBQU8sS0FGQSxBQUVLLEFBQ1o7MkJBQU8sS0FIQSxBQUdLLEFBQ1o7NkJBQVMsS0FKRixBQUlPLEFBQ2Q7MEJBQU0sS0FMQyxBQUtJOztrQ0FMSjtvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNQLGlCQURPO0FBRFgsQUFBTyxBQVNWLGFBVFU7Ozs7aUNBV0YsQUFDTDtBQUNBO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0s7QUFETDtBQUFBLGFBQUEsa0JBQ0ssY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREwsQUFDSyxBQUNELGtDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQztBQUREO0FBQUEsb0JBRlIsQUFDSSxBQUNJLEFBQ0MsQUFBSyxBQUlWLGlDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQzt5QkFBRCxBQUNVLEFBQ1Y7c0JBRkEsQUFFTyxBQUNQO3lCQUhBLEFBR1MsQUFDVDt5QkFKQSxBQUlVOzhCQUpWO2dDQUhKLEFBQ0ksQUFDQSxBQUNBLEFBUUo7QUFSSTtBQUNBLGtDQU9KLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxBQUFDO3lCQUFELEFBQ1UsQUFDVjtzQkFGQSxBQUVPLEFBQ1A7MkJBSEEsQUFHVyxBQUNYO3lCQUpBLEFBSVU7OEJBSlY7Z0NBeEJwQixBQUNJLEFBRUksQUFDSSxBQU9JLEFBV0EsQUFDSSxBQUNBLEFBbUJ2QjtBQW5CdUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7dUNBakVPLG1CQUFBLEFBQVcsUUFBWCxBQUFtQixzQkFBbkIsQUFBeUMsQTs7aUNBQTlEO0E7O3lEQUlZLEFBQVEsaUJBQUksQUFBYSxnQkFBYjt5SEFBaUIsaUJBQUEsQUFBTSxNQUFOO2lGQUFBO3NHQUFBO3NEQUFBO2lGQUFBO3lEQUN2QztBQUR1Qyw4REFDakMsMkJBRGlDLEFBQ2pDLEFBQVk7d0VBRHFCOytEQUVyQixJQUFBLEFBQUksUUFBSixBQUFZLFlBRlMsQUFFckIsQUFBd0I7O3lEQUExQztBQUZ1Qyw2RUFBQTt3RUFBQTsrREFHdEIsSUFBQSxBQUFJLFFBQUosQUFBWSxXQUhVLEFBR3RCLEFBQXVCOzt5REFBeEM7QUFIdUMsNEVBQUE7d0VBQUE7K0RBSXJCLElBQUEsQUFBSSxRQUFKLEFBQVkscUJBSlMsQUFJckIsQUFBaUM7O3lEQUFuRDtBQUp1Qyw2RUFLckM7QUFMcUM7bUVBSzlCLEFBQ0YsQUFDUDttRUFGUyxBQUVELEFBQ1I7cUVBSFMsQUFHQyxBQUNWO2tFQVR1QyxBQUs5QixBQUlGO0FBSkUsQUFDVDt5RkFOdUMsQUFXcEM7O3lEQVhvQzt5REFBQTt3RUFBQTs7QUFBQTtvREFBQTtBQUFqQjs7eURBQUE7aUVBQUE7QUFBQTtBLEFBQVosbUNBQVksQ0FBWjs7aUNBQVo7QTtrRUFtQkMsRUFBRSxXQUFGLEFBQWMsS0FBSyxjQUFuQixBLEFBQWtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBekJ0QixBLEFBd0YzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS95YWNoaW50L0RFUEFfUmVhY3QifQ==