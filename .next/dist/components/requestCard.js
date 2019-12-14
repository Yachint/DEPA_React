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

var _routes = require('../routes');

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
            //console.log(fname);

            return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                }
            }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, fname, ' ', lname), _react2.default.createElement(_semanticUiReact.Card.Meta, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, address), _react2.default.createElement(_semanticUiReact.Card.Description, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, 'No. of Documents :', docs)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_routes.Link, { route: '/accounts/' + this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, '    ', _react2.default.createElement(_semanticUiReact.Button, { color: 'blue', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, 'View Profile')))));
        }
    }]);

    return CardRenderer;
}(_react.Component);

exports.default = CardRenderer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcmVxdWVzdENhcmQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJ3ZWIzIiwiRG9jQ29udHJhY3QiLCJCdXR0b24iLCJDYXJkIiwiTGluayIsIkNhcmRSZW5kZXJlciIsInByb3BzIiwiZm5hbWUiLCJsbmFtZSIsImFkZHJlc3MiLCJkb2NzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFTLEFBQVM7O0FBQ2xCLEFBQVEsQUFBVzs7Ozs7OztJQUViLEE7Ozs7Ozs7Ozs7O2lDQUVPO3lCQUNrQyxLQURsQyxBQUN1QztnQkFEdkMsQUFDRyxlQURILEFBQ0c7Z0JBREgsQUFDVSxlQURWLEFBQ1U7Z0JBRFYsQUFDaUIsaUJBRGpCLEFBQ2lCO2dCQURqQixBQUMwQixjQUQxQixBQUMwQixBQUMvQjtBQUNBOzttQ0FDSSxBQUFDLHVDQUFLLE9BQU4sQUFBYTs4QkFBYjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFBYztBQUFkO0FBQUEsZUFBQSxPQUFzQixLQUQxQixBQUNJLEFBQ0Esd0JBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUFZO0FBQVo7QUFBQSxlQUZKLEFBRUksQUFDQSwwQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQUFxQyxzQkFKN0MsQUFDSSxBQUdJLEFBR0osd0JBQUMsY0FBRCxzQkFBQSxBQUFNLFdBQVEsT0FBZDs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQS9CLEFBQXFDOzhCQUFyQztnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQU8sd0JBQUEsQUFBQyx5Q0FBTyxPQUFSLEFBQWM7OEJBQWQ7Z0NBQUE7QUFBQTtlQVZmLEFBQ0ksQUFPSSxBQUNBLEFBQ0EsQUFBTyxBQU1sQjs7Ozs7QUFyQnNCLEEsQUF5QjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InJlcXVlc3RDYXJkLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9