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
                return _react2.default.createElement(_requestCard2.default, {
                    fname: item.fname,
                    lname: item.lname,
                    address: item.address,
                    docs: item.docs,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
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
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'DEPA Accounts'), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Sign up',
                icon: 'add circle',
                primary: true,
                floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }), _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, this.renderCards())));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWNjRmFjdG9yeSIsIlJlcXVlc3RDYXJkIiwiRG9jQ29udHJhY3QiLCJDYXJkIiwiQnV0dG9uIiwiTGF5b3V0IiwiQWNjb3VudEluZGV4IiwicHJvcHMiLCJkYXRhSXRlbXMiLCJtYXAiLCJpdGVtIiwiZm5hbWUiLCJsbmFtZSIsImFkZHJlc3MiLCJkb2NzIiwicmVuZGVyQ2FyZHMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRBY2NvdW50cyIsImNhbGwiLCJ1c2VyQWNjb3VudHMiLCJhbGwiLCJhZGRyIiwiYWNjIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJnZXREb2N1bWVudHNMZW5ndGgiLCJkb2N1bWVudHMiLCJhcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O3NDQTRCVyxBQUNUO3dCQUFPLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxnQkFBUSxBQUNwQzt1Q0FBTyxBQUFDOzJCQUNELEtBREEsQUFDSyxBQUNaOzJCQUFPLEtBRkEsQUFFSyxBQUNaOzZCQUFTLEtBSEYsQUFHTyxBQUNkOzBCQUFNLEtBSkMsQUFJSTs7a0NBSko7b0NBQVAsQUFBTyxBQU1WO0FBTlU7QUFDUCxpQkFETztBQURYLEFBQU8sQUFRVixhQVJVOzs7O2lDQVVGLEFBQ0w7QUFDQTttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQSxBQUFDO3lCQUFELEFBQ1UsQUFDVjtzQkFGQSxBQUVPLEFBQ1A7eUJBSEEsQUFHUyxBQUNUO3lCQUpBLEFBSVU7OEJBSlY7Z0NBRkosQUFFSSxBQU1BO0FBTkE7QUFDQSxnQ0FLQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQVZaLEFBQ0ksQUFDSSxBQVFJLEFBQ0ssQUFBSyxBQUt6Qjs7Ozs7Ozs7Ozs7Ozs7dUNBdkQ4QixtQkFBQSxBQUFXLFFBQVgsQUFBbUIsc0JBQW5CLEFBQXlDLEE7O2lDQUE5RDtBOzt5REFJWSxBQUFRLGlCQUFJLEFBQWEsZ0JBQWI7eUhBQWlCLGlCQUFBLEFBQU0sTUFBTjtpRkFBQTtzR0FBQTtzREFBQTtpRkFBQTt5REFDdkM7QUFEdUMsOERBQ2pDLDJCQURpQyxBQUNqQyxBQUFZO3dFQURxQjsrREFFckIsSUFBQSxBQUFJLFFBQUosQUFBWSxZQUZTLEFBRXJCLEFBQXdCOzt5REFBMUM7QUFGdUMsNkVBQUE7d0VBQUE7K0RBR3RCLElBQUEsQUFBSSxRQUFKLEFBQVksV0FIVSxBQUd0QixBQUF1Qjs7eURBQXhDO0FBSHVDLDRFQUFBO3dFQUFBOytEQUlyQixJQUFBLEFBQUksUUFBSixBQUFZLHFCQUpTLEFBSXJCLEFBQWlDOzt5REFBbkQ7QUFKdUMsNkVBS3JDO0FBTHFDO21FQUs5QixBQUNGLEFBQ1A7bUVBRlMsQUFFRCxBQUNSO3FFQUhTLEFBR0MsQUFDVjtrRUFUdUMsQUFLOUIsQUFJRjtBQUpFLEFBQ1Q7eUZBTnVDLEFBV3BDOzt5REFYb0M7eURBQUE7d0VBQUE7O0FBQUE7b0RBQUE7QUFBakI7O3lEQUFBO2lFQUFBO0FBQUE7QSxBQUFaLG1DQUFZLENBQVo7O2lDQUFaO0E7a0VBbUJDLEVBQUUsV0FBRixBQUFjLEtBQUssY0FBbkIsQSxBQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXpCdEIsQSxBQTREM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUveWFjaGludC9ERVBBX1JlYWN0In0=