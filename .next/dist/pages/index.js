'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/pages/index.js?entry';


var AccountIndex = function (_Component) {
    (0, _inherits3.default)(AccountIndex, _Component);

    function AccountIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AccountIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AccountIndex.__proto__ || (0, _getPrototypeOf2.default)(AccountIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            user: '',
            warning: false,
            loading: true,
            buttonDis: true
        }, _this.getLoginInfo = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var user, warn, accounts, isUser, userAcc, firstName, lastName;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _this.setState({ loading: true });
                            user = void 0;
                            warn = void 0;
                            _context.next = 5;
                            return _web2.default.eth.getAccounts();

                        case 5:
                            accounts = _context.sent;

                            if (!(accounts.length == 0)) {
                                _context.next = 10;
                                break;
                            }

                            warn = true;
                            _context.next = 27;
                            break;

                        case 10:
                            _context.next = 12;
                            return _Accounts2.default.methods.getMyAccount(accounts[0]).call();

                        case 12:
                            isUser = _context.sent;

                            console.log(isUser);

                            if (!(isUser == "0x0000000000000000000000000000000000000000")) {
                                _context.next = 18;
                                break;
                            }

                            user = "Guest";
                            _context.next = 26;
                            break;

                        case 18:
                            userAcc = (0, _DocContract2.default)(isUser);
                            _context.next = 21;
                            return userAcc.methods.firstName().call();

                        case 21:
                            firstName = _context.sent;
                            _context.next = 24;
                            return userAcc.methods.lastName().call();

                        case 24:
                            lastName = _context.sent;

                            user = firstName;

                        case 26:
                            warn = false;

                        case 27:

                            _this.setState({ user: user, warning: warn, loading: false });
                            if (_this.state.warning == false) {
                                _this.setState({ buttonDis: false });
                            }

                        case 29:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.logInSuccess = function () {
            return _react2.default.createElement('div', { className: 'ui steps', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('div', { className: 'completed step', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement('i', { className: 'user circle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }), _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('div', { className: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, 'Welcome, ', _this.state.user), _react2.default.createElement('div', { className: 'description', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Browsing using Metamask'))));
        }, _this.loadingMessage = function () {
            return _react2.default.createElement('div', { className: 'ui icon message', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('i', { className: 'notched circle loading icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement('div', { className: 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement('div', { className: 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, 'Just one second'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, 'We\'re trying to log you in.')));
        }, _this.logInFailure = function () {
            return _react2.default.createElement('div', { className: 'ui steps', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            }, _react2.default.createElement('div', { className: 'step', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 115
                }
            }, _react2.default.createElement('i', { className: 'close icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }), _react2.default.createElement('div', { className: 'content', style: { "word-wrap": "break-word" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('div', { className: 'title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, 'Can\'t Login!'), _react2.default.createElement('p', { style: { "word-wrap": "break-word" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Please install Metamask Extension or Log in!'))));
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AccountIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.getLoginInfo();

                            case 1:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
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
                        lineNumber: 78
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            console.log(this.state.warning);
            var noMetamask = this.state.warning ? {} : { display: 'none' };
            var loadMessage = this.state.loading ? {} : { display: 'none' };
            var enabledMetamask = void 0;
            if (this.state.warning == false && this.state.loading == false) {
                enabledMetamask = {};
            } else {
                enabledMetamask = { display: 'none' };
            }
            // if(loadMessage){
            //     enabledMetamask = {display : 'none'};
            // }
            return _react2.default.createElement(_Layout2.default, { user: this.state.user, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, 'DEPA Accounts'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 145
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 146
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 147
                }
            }, this.renderCards())), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 152
                }
            }, _react2.default.createElement('div', { style: loadMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 153
                }
            }, this.loadingMessage()), _react2.default.createElement('div', { style: noMetamask, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, this.logInFailure()), _react2.default.createElement('div', { style: enabledMetamask, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 159
                }
            }, this.logInSuccess()), _react2.default.createElement(_routes.Link, { route: '/accounts/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Sign up',
                icon: 'add circle',
                primary: true,
                floated: 'right',
                disabled: this.state.buttonDis, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }))), _react2.default.createElement(_routes.Link, { route: '/accounts/uploadNew', params: { user: this.state.user }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Deposit Files',
                icon: 'upload',
                secondary: true,
                floated: 'right',
                disabled: this.state.buttonDis, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            })))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
                var _this3 = this;

                var userAccounts, arr;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return _Accounts2.default.methods.getDeployedAccounts().call();

                            case 2:
                                userAccounts = _context4.sent;
                                _context4.next = 5;
                                return _promise2.default.all(userAccounts.map(function () {
                                    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(addr) {
                                        var acc, firstName, lastName, documents, item;
                                        return _regenerator2.default.wrap(function _callee3$(_context3) {
                                            while (1) {
                                                switch (_context3.prev = _context3.next) {
                                                    case 0:
                                                        acc = (0, _DocContract2.default)(addr);
                                                        _context3.next = 3;
                                                        return acc.methods.firstName().call();

                                                    case 3:
                                                        firstName = _context3.sent;
                                                        _context3.next = 6;
                                                        return acc.methods.lastName().call();

                                                    case 6:
                                                        lastName = _context3.sent;
                                                        _context3.next = 9;
                                                        return acc.methods.getDocumentsLength().call();

                                                    case 9:
                                                        documents = _context3.sent;
                                                        item = {
                                                            fname: firstName,
                                                            lname: lastName,
                                                            address: addr,
                                                            docs: documents
                                                        };
                                                        return _context3.abrupt('return', item);

                                                    case 12:
                                                    case 'end':
                                                        return _context3.stop();
                                                }
                                            }
                                        }, _callee3, _this3);
                                    }));

                                    return function (_x) {
                                        return _ref5.apply(this, arguments);
                                    };
                                }()));

                            case 5:
                                arr = _context4.sent;
                                return _context4.abrupt('return', { dataItems: arr, userAccounts: userAccounts });

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getInitialProps() {
                return _ref4.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return AccountIndex;
}(_react.Component);

exports.default = AccountIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWNjRmFjdG9yeSIsIlJlcXVlc3RDYXJkIiwiRG9jQ29udHJhY3QiLCJDYXJkIiwiQnV0dG9uIiwiR3JpZCIsIkxheW91dCIsIkxpbmsiLCJ3ZWIzIiwiQWNjb3VudEluZGV4Iiwic3RhdGUiLCJ1c2VyIiwid2FybmluZyIsImxvYWRpbmciLCJidXR0b25EaXMiLCJnZXRMb2dpbkluZm8iLCJzZXRTdGF0ZSIsIndhcm4iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibGVuZ3RoIiwibWV0aG9kcyIsImdldE15QWNjb3VudCIsImNhbGwiLCJpc1VzZXIiLCJjb25zb2xlIiwibG9nIiwidXNlckFjYyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwibG9nSW5TdWNjZXNzIiwibG9hZGluZ01lc3NhZ2UiLCJsb2dJbkZhaWx1cmUiLCJwcm9wcyIsImRhdGFJdGVtcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImZuYW1lIiwibG5hbWUiLCJhZGRyZXNzIiwiZG9jcyIsIm5vTWV0YW1hc2siLCJkaXNwbGF5IiwibG9hZE1lc3NhZ2UiLCJlbmFibGVkTWV0YW1hc2siLCJyZW5kZXJDYXJkcyIsImdldERlcGxveWVkQWNjb3VudHMiLCJ1c2VyQWNjb3VudHMiLCJhbGwiLCJhZGRyIiwiYWNjIiwiZ2V0RG9jdW1lbnRzTGVuZ3RoIiwiZG9jdW1lbnRzIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQU0sQUFBUTs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFVOzs7Ozs7Ozs7SUFFWCxBOzs7Ozs7Ozs7Ozs7Ozs7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