'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _DocContract = require('../ethereum/DocContract');

var _DocContract2 = _interopRequireDefault(_DocContract);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/components/requestCard.js';


var CardRenderer = function (_Component) {
    (0, _inherits3.default)(CardRenderer, _Component);

    function CardRenderer() {
        (0, _classCallCheck3.default)(this, CardRenderer);

        return (0, _possibleConstructorReturn3.default)(this, (CardRenderer.__proto__ || (0, _getPrototypeOf2.default)(CardRenderer)).apply(this, arguments));
    }

    (0, _createClass3.default)(CardRenderer, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                fname = _props.fname,
                lname = _props.lname,
                address = _props.address,
                docs = _props.docs;

            console.log(fname);
            return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, fname, ' ', lname), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, address), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, 'No. of Documents :', docs)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'View Profile')));
        }
    }]);

    return CardRenderer;
}(_react.Component);

exports.default = CardRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdENhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwiRG9jQ29udHJhY3QiLCJCdXR0b24iLCJDYXJkIiwiQ2FyZFJlbmRlcmVyIiwicHJvcHMiLCJmbmFtZSIsImxuYW1lIiwiYWRkcmVzcyIsImRvY3MiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQVM7Ozs7Ozs7SSxBQUVaOzs7Ozs7Ozs7OztpQ0FFTzt5QkFDa0MsS0FEbEMsQUFDdUM7Z0JBRHZDLEFBQ0csZUFESCxBQUNHO2dCQURILEFBQ1UsZUFEVixBQUNVO2dCQURWLEFBQ2lCLGlCQURqQixBQUNpQjtnQkFEakIsQUFDMEIsY0FEMUIsQUFDMEIsQUFDL0I7O29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7bUNBQ0ksQUFBQyx1Q0FBSyxPQUFOLEFBQWE7OEJBQWI7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQWM7QUFBZDtBQUFBLGVBQUEsT0FBc0IsS0FEMUIsQUFDSSxBQUNBLHdCQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBWTtBQUFaO0FBQUEsZUFGSixBQUVJLEFBQ0EsMEJBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFBcUMsc0JBSjdDLEFBQ0ksQUFHSSxBQUdKLHdCQUFDLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sT0FBUixBQUFjOzhCQUFkO2dDQUFBO0FBQUE7ZUFUWixBQUNJLEFBT0ksQUFDSSxBQUtmOzs7OztBQW5Cc0IsQSxBQXVCM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVxdWVzdENhcmQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUveWFjaGludC9ERVBBX1JlYWN0In0=