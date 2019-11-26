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

var _requestCard = __webpack_require__(987);

var _requestCard2 = _interopRequireDefault(_requestCard);

var _DocContract = __webpack_require__(988);

var _DocContract2 = _interopRequireDefault(_DocContract);

var _semanticUiReact = __webpack_require__(629);

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
                _react2.default.createElement(_requestCard2.default, {
                    fname: item.fname,
                    lname: item.lname,
                    address: item.address,
                    docs: item.docs,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props.dataItems);
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, this.props.userAccounts[0], '+++++', this.test, _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, this.renderCards()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQWNjRmFjdG9yeSIsIlJlcXVlc3RDYXJkIiwiRG9jQ29udHJhY3QiLCJDYXJkIiwiQnV0dG9uIiwiQWNjb3VudEluZGV4IiwicHJvcHMiLCJkYXRhSXRlbXMiLCJtYXAiLCJpdGVtIiwiZm5hbWUiLCJsbmFtZSIsImFkZHJlc3MiLCJkb2NzIiwiY29uc29sZSIsImxvZyIsInVzZXJBY2NvdW50cyIsInRlc3QiLCJyZW5kZXJDYXJkcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZEFjY291bnRzIiwiY2FsbCIsImFsbCIsImFkZHIiLCJhY2MiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImdldERvY3VtZW50c0xlbmd0aCIsImRvY3VtZW50cyIsImFyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBUyxBQUFNOzs7Ozs7O0ksQUFFVDs7Ozs7Ozs7Ozs7c0NBNEJXLEFBQ1Q7d0JBQU8sQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLGdCQUFRLEFBQ3BDO2dDQUFBLEFBQUM7MkJBQ00sS0FEUCxBQUNZLEFBQ1o7MkJBQU8sS0FGUCxBQUVZLEFBQ1o7NkJBQVMsS0FIVCxBQUdjLEFBQ2Q7MEJBQU0sS0FKTixBQUlXOztrQ0FKWDtvQ0FBQSxBQU1IO0FBTkc7QUFDQTtBQUZKLEFBQU8sQUFRVixhQVJVOzs7O2lDQVVGLEFBQ0w7b0JBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxhQUFBLE9BQ0ssQUFBSyxNQUFMLEFBQVcsYUFEaEIsQUFDSyxBQUF3QixJQUV4QixjQUhMLEFBR1UsQUFDTixzQkFBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUxSLEFBQ0ksQUFJSSxBQUNLLEFBQUssQUFJckI7Ozs7Ozs7Ozs7Ozs7O3VDQWpEOEIsbUJBQUEsQUFBVyxRQUFYLEFBQW1CLHNCLEFBQW5CLEFBQXlDOztpQ0FBOUQ7QTs7eURBSVksQUFBUSxpQkFBSSxBQUFhLGdCQUFiO3lIQUFpQixpQkFBQSxBQUFNLE1BQU47aUZBQUE7c0dBQUE7c0RBQUE7aUZBQUE7eURBQ3ZDO0FBRHVDLDhEQUNqQywyQkFEaUMsQUFDakMsQUFBWTt3RUFEcUI7K0RBRXJCLElBQUEsQUFBSSxRQUFKLEFBQVksWUFGUyxBQUVyQixBQUF3Qjs7eURBQTFDO0FBRnVDLDZFQUFBO3dFQUFBOytEQUd0QixJQUFBLEFBQUksUUFBSixBQUFZLFdBSFUsQUFHdEIsQUFBdUI7O3lEQUF4QztBQUh1Qyw0RUFBQTt3RUFBQTsrREFJckIsSUFBQSxBQUFJLFFBQUosQUFBWSxxQkFKUyxBQUlyQixBQUFpQzs7eURBQW5EO0FBSnVDLDZFQUtyQztBQUxxQzttRUFLOUIsQUFDRixBQUNQO21FQUZTLEFBRUQsQUFDUjtxRUFIUyxBQUdDLEFBQ1Y7a0VBVHVDLEFBSzlCLEFBSUY7QUFKRSxBQUNUO3lGQU51QyxBQVdwQzs7eURBWG9DO3lEQUFBO3dFQUFBOztBQUFBO29EQUFBO0FBQWpCOzt5REFBQTtpRUFBQTtBQUFBO0EsQUFBWixtQ0FBWSxDQUFaOztpQ0FBWjtBO2tFQW1CQyxFQUFFLFdBQUYsQUFBYyxLQUFLLGNBQW5CLEEsQUFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF6QnRCLEEsQUFzRDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kM2ZhMmViNjEyOTc1N2RmZDZlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjNkYjA0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjY0ZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vQWNjb3VudHMnXG5pbXBvcnQgUmVxdWVzdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9yZXF1ZXN0Q2FyZCc7XG5pbXBvcnQgRG9jQ29udHJhY3QgZnJvbSAnLi4vZXRoZXJldW0vRG9jQ29udHJhY3QnO1xuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXG5cbmNsYXNzIEFjY291bnRJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgICAgICBjb25zdCB1c2VyQWNjb3VudHMgPSBhd2FpdCBBY2NGYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRBY2NvdW50cygpLmNhbGwoKTtcbiAgICAgICAgLy8gY29uc3QgaW5zdGFuY2UgPSBEb2NDb250cmFjdCh1c2VyQWNjb3VudHNbMF0pO1xuICAgICAgICAvLyBjb25zdCBmbmFtZSA9IGF3YWl0IGluc3RhbmNlLm1ldGhvZHMuZmlyc3ROYW1lKCkuY2FsbCgpO1xuICAgICAgICB2YXIgdGVzdDtcbiAgICAgICAgY29uc3QgYXJyID0gYXdhaXQgUHJvbWlzZS5hbGwodXNlckFjY291bnRzLm1hcChhc3luYyBhZGRyID0+IHtcbiAgICAgICAgICAgIGxldCBhY2MgPSBEb2NDb250cmFjdChhZGRyKTtcbiAgICAgICAgICAgIGxldCBmaXJzdE5hbWUgPSBhd2FpdCBhY2MubWV0aG9kcy5maXJzdE5hbWUoKS5jYWxsKCk7XG4gICAgICAgICAgICBsZXQgbGFzdE5hbWUgPSBhd2FpdCBhY2MubWV0aG9kcy5sYXN0TmFtZSgpLmNhbGwoKTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudHMgPSBhd2FpdCBhY2MubWV0aG9kcy5nZXREb2N1bWVudHNMZW5ndGgoKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICAgICAgICAgIGZuYW1lIDpmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbG5hbWUgOiBsYXN0TmFtZSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzIDogYWRkcixcbiAgICAgICAgICAgICAgICBkb2NzIDogZG9jdW1lbnRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSlcblxuICAgICAgICApO1xuXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBkYXRhSXRlbXMgOiBhcnIsIHVzZXJBY2NvdW50cyA6IHVzZXJBY2NvdW50c307XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FyZHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YUl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIDxSZXF1ZXN0Q2FyZCBcbiAgICAgICAgICAgIGZuYW1lPXtpdGVtLmZuYW1lfVxuICAgICAgICAgICAgbG5hbWU9e2l0ZW0ubG5hbWV9XG4gICAgICAgICAgICBhZGRyZXNzPXtpdGVtLmFkZHJlc3N9XG4gICAgICAgICAgICBkb2NzPXtpdGVtLmRvY3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5kYXRhSXRlbXMpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VyQWNjb3VudHNbMF19XG4gICAgICAgICAgICAgICAgKysrKytcbiAgICAgICAgICAgICAgICB7dGhpcy50ZXN0fVxuICAgICAgICAgICAgICAgIDxDYXJkLkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Hcm91cD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudEluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7QUFOQTtBQUNBO0FBTUE7Ozs7QUFHQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBNUNBO0FBQ0E7QUFEQTs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7O0FBbUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=