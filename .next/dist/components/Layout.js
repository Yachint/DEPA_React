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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'G:\\DEPA_React\\components\\Layout.js';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkhlYWRlciIsIkNvbnRhaW5lciIsIkhlYWQiLCJMYXlvdXQiLCJwcm9wcyIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJzdGF0ZSIsInVuZGVmaW5lZCIsIm5ld1Byb3BzIiwic2V0U3RhdGUiLCJhcnJDaGlsZCIsImNoaWxkcmVuIiwic2xpY2UiLCJjaGlsZHJlbldpdGhQcm9wcyIsIkNoaWxkcmVuIiwibWFwIiwiY2xvbmVFbGVtZW50IiwiY2hpbGQiLCJ1dG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPOzs7O0FBQ2QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0lBRUQsQTtvQ0FHRjs7b0JBQUEsQUFBWSxPQUFNOzRDQUFBOzswSUFBQSxBQUNSOztjQUZWLEFBQ2tCLGVBREgsRUFBRSxNQUFGLEFBQVMsQUFDTixBQUVkOztZQUFHLE1BQUEsQUFBSyxVQUFSLEFBQWlCLFdBQVUsQUFDdkI7a0JBQUEsQUFBSyxRQUFRLEVBQUUsTUFBZixBQUFhLEFBQVMsQUFDekI7QUFKYTtlQUtqQjs7Ozs7MkNBRWtCLEEsVUFBUztnQkFBQSxBQUNoQixPQUFTLEtBRE8sQUFDRixNQURFLEFBQ2hCLEFBQ1I7O2dCQUFHLFNBQUEsQUFBUyxTQUFULEFBQWtCLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxTQUF4QyxBQUFpRCxNQUFLLEFBQ2xEO3FCQUFBLEFBQUssU0FBUyxFQUFFLE1BQU8sS0FBQSxBQUFLLE1BQTVCLEFBQWMsQUFBb0IsQUFFckM7QUFDSjs7OztpQ0FFTyxBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztnQkFBSSxnQkFBSixBQUNBO2dCQUFHLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixNQUF2QixBQUE2QixXQUFVLEFBQ25DOzJCQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixNQUEvQixBQUFXLEFBQTBCLEFBQ3hDO0FBRkQsbUJBRUssQUFDRDsyQkFBVyxLQUFBLEFBQUssTUFBaEIsQUFBc0IsQUFDekI7QUFHRDs7Z0JBQU0sb0NBQW9CLEFBQU0sU0FBTixBQUFlLElBQWYsQUFBbUIsVUFBVSxpQkFBQTt1QkFDbkQsZ0JBQUEsQUFBTSxhQUFOLEFBQW1CLE9BQU8sRUFBRSxRQUR1QixBQUNuRCxBQUEwQixBQUFVO0FBRHhDLEFBQTBCLEFBRzFCLGFBSDBCO21DQUl0QixBQUFDOzs4QkFBRDtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLHVEQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCOzhCQUE1QjtnQ0FIUixBQUVJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLEFBQUM7OzhCQUFEO2dDQUxKLEFBS0ksQUFDQztBQUREO0FBQUEscUJBQ0MsQUFBSyxNQVBkLEFBQ0ksQUFNZ0IsQUFHdkI7Ozs7O0EsQUEvQ2dCLEFBb0RyQjs7a0JBQUEsQUFBZTs7QUFHZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6IkxheW91dC5qcyIsInNvdXJjZVJvb3QiOiJHOi9ERVBBX1JlYWN0In0=