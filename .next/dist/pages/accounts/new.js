'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _Accounts = require('../../ethereum/Accounts');

var _Accounts2 = _interopRequireDefault(_Accounts);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/pages/accounts/new.js?entry';


var AccountsNew = function (_Component) {
    (0, _inherits3.default)(AccountsNew, _Component);

    function AccountsNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, AccountsNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AccountsNew.__proto__ || (0, _getPrototypeOf2.default)(AccountsNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = { fname: '',
            lname: '',
            errorMessage: '',
            loading: false }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return _Accounts2.default.methods.createAccount(_this.state.fname, _this.state.lname).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 13;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](2);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 13:

                                _this.setState({ loading: false });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(AccountsNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, 'Create an Account'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'First Name'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.fname,
                onChange: function onChange(event) {
                    _this3.setState({ fname: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Last Name'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.lname,
                onChange: function onChange(event) {
                    _this3.setState({ lname: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Create!')));
        }
    }]);

    return AccountsNew;
}(_react.Component);

exports.default = AccountsNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnRzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJBTSIsIndlYjMiLCJBY2NvdW50c05ldyIsInN0YXRlIiwiZm5hbWUiLCJsbmFtZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlQWNjb3VudCIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVU7Ozs7Ozs7OztJQUdYLEE7Ozs7Ozs7Ozs7Ozs7OzswTkFFRixBLFVBQVUsT0FBRixBQUFVLEFBQ1Y7bUJBREEsQUFDUSxBQUNSLEVBRkE7MEJBQUEsQUFFYyxBQUNkO3FCQUhBLEFBR1UsQSxlQUVsQixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRU47O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBWSxNQUFNLGNBSHpCLEFBR1AsQUFBYyxBQUFpQzs7Z0RBSHhDO2dEQUFBO3VDQU1vQixjQUFBLEFBQUssSUFOekIsQUFNb0IsQUFBUzs7aUNBQTFCO0FBTkgsb0RBQUE7Z0RBQUE7MERBT0csQUFBRyxRQUFILEFBQVcsY0FDYixNQUFBLEFBQUssTUFESCxBQUNTLE9BQ1gsTUFBQSxBQUFLLE1BRkgsQUFFUyxPQUZULEFBR0o7MENBQ1MsU0FYUixBQU9HLEFBR0MsQUFDSSxBQUFTO0FBRGIsQUFDSCxpQ0FKRTs7aUNBUEg7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBZUg7O3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWUsWUFmNUIsQUFlSCxBQUFjLEFBQXFCOztpQ0FHdkM7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBbEJSLEFBa0JQLEFBQWMsQUFBUzs7aUNBbEJoQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXFCRjt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esc0NBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsK0JBQUEsQUFBQzt1QkFDTSxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNsQjswQkFBWSxrQkFBQSxBQUFDLE9BQVUsQUFDbkI7MkJBQUEsQUFBSyxTQUFTLEVBQUUsT0FBUSxNQUFBLEFBQU0sT0FBOUIsQUFBYyxBQUF1QixBQUN4QztBQUpEOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFRSjtBQVJJO0FBQ0EsaUNBT0gsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsOEJBQUEsQUFBQzt1QkFDTSxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNsQjswQkFBWSxrQkFBQSxBQUFDLE9BQVMsQUFDbEI7MkJBQUEsQUFBSyxTQUFTLEVBQUUsT0FBUSxNQUFBLEFBQU0sT0FBOUIsQUFBYyxBQUF1QixBQUN4QztBQUpEOzs4QkFBQTtnQ0FiUixBQVdJLEFBRUksQUFPSjtBQVBJO0FBQ0EsaUNBTUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FwQkosQUFvQkksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBeEJaLEFBQ0ksQUFFSSxBQXFCSSxBQUtmOzs7OztBQTFEcUIsQSxBQThEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9