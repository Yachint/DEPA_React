webpackHotUpdate(5,{

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Accounts = __webpack_require__(783);

var _Accounts2 = _interopRequireDefault(_Accounts);

var _requestCard = __webpack_require__(988);

var _requestCard2 = _interopRequireDefault(_requestCard);

var _DocContract = __webpack_require__(629);

var _DocContract2 = _interopRequireDefault(_DocContract);

var _semanticUiReact = __webpack_require__(466);

var _Layout = __webpack_require__(1274);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/yachint/DEPA_React/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/yachint/DEPA_React/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42ZmU4NTJjMTg3NDk3NWM2NTIzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZmRjOWM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjY0ZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vQWNjb3VudHMnXG5pbXBvcnQgUmVxdWVzdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9yZXF1ZXN0Q2FyZCc7XG5pbXBvcnQgRG9jQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vRG9jQ29udHJhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY2xhc3MgQWNjb3VudEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgICAgIGNvbnN0IHVzZXJBY2NvdW50cyA9IGF3YWl0IEFjY0ZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZEFjY291bnRzKCkuY2FsbCgpO1xuICAgICAgICAvLyBjb25zdCBpbnN0YW5jZSA9IERvY0NvbnRyYWN0KHVzZXJBY2NvdW50c1swXSk7XG4gICAgICAgIC8vIGNvbnN0IGZuYW1lID0gYXdhaXQgaW5zdGFuY2UubWV0aG9kcy5maXJzdE5hbWUoKS5jYWxsKCk7XG4gICAgICAgIHZhciB0ZXN0O1xuICAgICAgICBjb25zdCBhcnIgPSBhd2FpdCBQcm9taXNlLmFsbCh1c2VyQWNjb3VudHMubWFwKGFzeW5jIGFkZHIgPT4ge1xuICAgICAgICAgICAgbGV0IGFjYyA9IERvY0NvbnRyYWN0KGFkZHIpO1xuICAgICAgICAgICAgbGV0IGZpcnN0TmFtZSA9IGF3YWl0IGFjYy5tZXRob2RzLmZpcnN0TmFtZSgpLmNhbGwoKTtcbiAgICAgICAgICAgIGxldCBsYXN0TmFtZSA9IGF3YWl0IGFjYy5tZXRob2RzLmxhc3ROYW1lKCkuY2FsbCgpO1xuICAgICAgICAgICAgbGV0IGRvY3VtZW50cyA9IGF3YWl0IGFjYy5tZXRob2RzLmdldERvY3VtZW50c0xlbmd0aCgpLmNhbGwoKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgZm5hbWUgOmZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsbmFtZSA6IGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MgOiBhZGRyLFxuICAgICAgICAgICAgICAgIGRvY3MgOiBkb2N1bWVudHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9KVxuXG4gICAgICAgICk7XG5cbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7IGRhdGFJdGVtcyA6IGFyciwgdXNlckFjY291bnRzIDogdXNlckFjY291bnRzfTtcbiAgICB9XG5cbiAgICByZW5kZXJDYXJkcygpe1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSZXF1ZXN0Q2FyZCBcbiAgICAgICAgICAgIGZuYW1lPXtpdGVtLmZuYW1lfVxuICAgICAgICAgICAgbG5hbWU9e2l0ZW0ubG5hbWV9XG4gICAgICAgICAgICBhZGRyZXNzPXtpdGVtLmFkZHJlc3N9XG4gICAgICAgICAgICBkb2NzPXtpdGVtLmRvY3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnByb3BzLmRhdGFJdGVtcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5ERVBBIEFjY291bnRzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IFwiU2lnbiB1cFwiXG4gICAgICAgICAgICAgICAgICAgIGljb24gPSBcImFkZCBjaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBmbG9hdGVkID0gXCJyaWdodFwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Hcm91cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudEluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBTUE7Ozs7QUFHQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQWpEQTtBQUNBO0FBREE7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBSkE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBWkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBOztBQW1CQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9