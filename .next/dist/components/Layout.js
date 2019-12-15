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

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/components/Layout.js';


var Layout = function (_Component) {
    (0, _inherits3.default)(Layout, _Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

        _this.localStorage = { user: '' };

        if (_this.state === undefined) {
            _this.state = { user: 'NA' };
        }
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(newProps) {
            var user = this.props.user;

            if (newProps.user !== user && this.state.user === 'NA') {
                this.setState({ user: this.props.user });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // const childrenWithProps = React.Children.map(this.props.children, child =>
            //     React.cloneElement(child, { doSomething: this.state.user })
            //   );
            //console.log("PROPS.CHILDREN :");
            //console.log(typeof this.props.children);
            //console.log(React.isValidElement(this.props.children[1]));

            var arrChild = void 0;
            if (this.props.children[0] == undefined) {
                arrChild = this.props.children.slice(1);
            } else {
                arrChild = this.props.children;
            }

            var childrenWithProps = _react2.default.Children.map(arrChild, function (child) {
                return _react2.default.cloneElement(child, { utoken: "btbt" });
            });
            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })), _react2.default.createElement(_Header2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), this.props.children);
        }
    }]);

    return Layout;
}(_react.Component);

exports.default = Layout;

// export default (props) => {
//     return(
//         <Container>
//             <Head>
//             <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />


//             </Head>
//         <Header />
//         {props.children}

//         </Container>
//     )
// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiSGVhZCIsIkxheW91dCIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwidXNlciIsInN0YXRlIiwidW5kZWZpbmVkIiwibmV3UHJvcHMiLCJzZXRTdGF0ZSIsImFyckNoaWxkIiwiY2hpbGRyZW4iLCJzbGljZSIsImNoaWxkcmVuV2l0aFByb3BzIiwiQ2hpbGRyZW4iLCJtYXAiLCJjbG9uZUVsZW1lbnQiLCJjaGlsZCIsInV0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SUFFRCxBO29DQUdGOztvQkFBQSxBQUFZLE9BQU07NENBQUE7OzBJQUFBLEFBQ1I7O2NBRlYsQUFDa0IsZUFESCxFQUFFLE1BQUYsQUFBUyxBQUNOLEFBRWQ7O1lBQUcsTUFBQSxBQUFLLFVBQVIsQUFBaUIsV0FBVSxBQUN2QjtrQkFBQSxBQUFLLFFBQVEsRUFBRSxNQUFmLEFBQWEsQUFBUyxBQUN6QjtBQUphO2VBS2pCOzs7OzsyQ0FFa0IsQSxVQUFTO2dCQUFBLEFBQ2hCLE9BQVMsS0FETyxBQUNGLE1BREUsQUFDaEIsQUFDUjs7Z0JBQUcsU0FBQSxBQUFTLFNBQVQsQUFBa0IsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQXhDLEFBQWlELE1BQUssQUFDbEQ7cUJBQUEsQUFBSyxTQUFTLEVBQUUsTUFBTyxLQUFBLEFBQUssTUFBNUIsQUFBYyxBQUFvQixBQUVyQztBQUNKOzs7O2lDQUVPLEFBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O2dCQUFJLGdCQUFKLEFBQ0E7Z0JBQUcsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLE1BQXZCLEFBQTZCLFdBQVUsQUFDbkM7MkJBQVcsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLE1BQS9CLEFBQVcsQUFBMEIsQUFDeEM7QUFGRCxtQkFFSyxBQUNEOzJCQUFXLEtBQUEsQUFBSyxNQUFoQixBQUFzQixBQUN6QjtBQUdEOztnQkFBTSxvQ0FBb0IsQUFBTSxTQUFOLEFBQWUsSUFBZixBQUFtQixVQUFVLGlCQUFBO3VCQUNuRCxnQkFBQSxBQUFNLGFBQU4sQUFBbUIsT0FBTyxFQUFFLFFBRHVCLEFBQ25ELEFBQTBCLEFBQVU7QUFEeEMsQUFBMEIsQUFHMUIsYUFIMEI7bUNBSXRCLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUk7QUFGSjtBQUFBLGFBQUEsa0JBRUksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsdURBQ1UsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQUhSLEFBRUksQUFDSSxBQUVKO0FBRkk7aUNBRUosQUFBQzs7OEJBQUQ7Z0NBTEosQUFLSSxBQUNDO0FBREQ7QUFBQSxxQkFDQyxBQUFLLE1BUGQsQUFDSSxBQU1nQixBQUd2Qjs7Ozs7QSxBQS9DZ0IsQUFvRHJCOztrQkFBQSxBQUFlOztBQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9