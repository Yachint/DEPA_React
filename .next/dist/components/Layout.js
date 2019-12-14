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

        _this.state = { user: props.user };
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
        key: 'render',
        value: function render() {
            // const childrenWithProps = React.Children.map(this.props.children, child =>
            //     React.cloneElement(child, { doSomething: this.state.user })
            //   );
            console.log("PROPS.CHILDREN :");
            console.log(_react2.default.isValidElement(this.props.children));
            console.log(_react2.default.Children.countChildren);

            // const childrenWithProps = React.Children.filter(child => child!== null).map(this.props.children, child =>
            //     React.cloneElement(child, { userName: this.state.user })
            //   );
            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            })), _react2.default.createElement(_Header2.default, { user: this.state.user, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSGVhZGVyIiwiQ29udGFpbmVyIiwiSGVhZCIsIkxheW91dCIsInByb3BzIiwic3RhdGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsImlzVmFsaWRFbGVtZW50IiwiY2hpbGRyZW4iLCJDaGlsZHJlbiIsImNvdW50Q2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0ksQUFFRDtvQ0FDRjs7b0JBQUEsQUFBWSxPQUFNOzRDQUFBOzswSUFBQSxBQUNSLEFBQ047O2NBQUEsQUFBSyxRQUFRLEVBQUUsTUFBTyxNQUZSLEFBRWQsQUFBYSxBQUFlO2VBQy9COzs7OztpQ0FHTyxBQUNKO0FBQ0E7QUFDQTtBQUNBO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7b0JBQUEsQUFBUSxJQUFJLGdCQUFBLEFBQU0sZUFBZSxLQUFBLEFBQUssTUFBdEMsQUFBWSxBQUFnQyxBQUM1QztvQkFBQSxBQUFRLElBQUksZ0JBQUEsQUFBTSxTQUFsQixBQUEyQixBQUUzQjs7QUFDQTtBQUNBO0FBQ0E7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSx1REFDVSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0Qjs4QkFBNUI7Z0NBRlIsQUFDSSxBQUNJLEFBRUo7QUFGSTtpQ0FFSixBQUFDLGtDQUFPLE1BQU0sS0FBQSxBQUFLLE1BQW5CLEFBQXlCOzhCQUF6QjtnQ0FKSixBQUlJLEFBQ0M7QUFERDtxQkFDQyxBQUFLLE1BTmQsQUFDSSxBQUtnQixBQUd2Qjs7Ozs7QUEzQmdCLEFBZ0NyQixBOztrQkFBQSxBQUFlOztBQUdmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiTGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9