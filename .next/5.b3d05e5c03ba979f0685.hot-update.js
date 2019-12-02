webpackHotUpdate(5,{

/***/ 1049:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = __webpack_require__(1051);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _semanticUiReact = __webpack_require__(575);

var _Layout = __webpack_require__(1335);

var _Layout2 = _interopRequireDefault(_Layout);

var _Accounts = __webpack_require__(1353);

var _Accounts2 = _interopRequireDefault(_Accounts);

var _web = __webpack_require__(621);

var _web2 = _interopRequireDefault(_web);

var _ipfsApi = __webpack_require__(1548);

var _ipfsApi2 = _interopRequireDefault(_ipfsApi);

var _DocContract = __webpack_require__(1928);

var _DocContract2 = _interopRequireDefault(_DocContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/pages/accounts/uploadNew.js?entry';


var FileForm = function (_Component) {
    (0, _inherits3.default)(FileForm, _Component);

    function FileForm() {
        var _ref,
            _this$state,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, FileForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FileForm.__proto__ || (0, _getPrototypeOf2.default)(FileForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = (_this$state = { expiry: false, docType: '', minFee: '', hash: '',
            errorMessage: '', loading: false, file: '', fileName: ''
        }, (0, _defineProperty3.default)(_this$state, 'hash', ''), (0, _defineProperty3.default)(_this$state, 'showLoading', false), (0, _defineProperty3.default)(_this$state, 'showCompleted', false), _this$state), _this.toBuffer = function (ab) {
            console.log("INSIDE");
            var buf = Buffer.alloc(ab.byteLength);
            var view = new Uint8Array(ab);
            for (var i = 0; i < buf.length; ++i) {
                buf[i] = view[i];
            }
            return buf;
        }, _this.uploadFile = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file) {
                var ipfs;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                ipfs = (0, _ipfsApi2.default)('ipfs.infura.io', '5001', { protocol: 'https' });
                                return _context.abrupt('return', new _promise2.default(function (resolve, reject) {
                                    var reader = new FileReader();
                                    reader.onloadend = function () {
                                        var buffer = Buffer.from(reader.result);
                                        ipfs.add(buffer).then(function (files) {
                                            resolve(files);
                                        }).catch(function (error) {
                                            return reject(error);
                                        });
                                    };
                                    reader.readAsArrayBuffer(file);
                                }));

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.loadingMessage = function () {
            return _react2.default.createElement('div', { 'class': 'ui icon message', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement('i', { 'class': 'notched circle loading icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement('div', { 'class': 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('div', { 'class': 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Just a few seconds'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'We\'re currently uploading your document to IPFS...')));
        }, _this.completeMessage = function () {
            return _react2.default.createElement('div', { 'class': 'ui icon message', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement('i', { 'class': 'inbox icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement('div', { 'class': 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('div', { 'class': 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Succesfully Uploaded to IPFS!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'The hash provided will act as unique link to your document')));
        }, _this.onFileInput = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var file, files, multihash;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _this.setState({ loading: true, showLoading: true });
                                _this.setState({ file: event.target.files[0], fileName: event.target.files[0].name }, function () {
                                    console.log("File chosen --->", _this.state.file, console.log("File name  --->", _this.state.fileName));
                                });

                                file = event.target.files[0];
                                _context2.next = 5;
                                return _this.uploadFile(file);

                            case 5:
                                files = _context2.sent;
                                multihash = files[0].hash;

                                console.log(multihash);
                                _this.setState({ loading: false, showLoading: false, showCompleted: true, hash: multihash });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.onSubmit = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var accounts, myAddress, userAcc, _this$props, expiry, docType, minFee;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });

                                _context3.prev = 2;
                                _context3.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context3.sent;
                                _context3.next = 8;
                                return _Accounts2.default.methods.getMyAccount().call();

                            case 8:
                                myAddress = _context3.sent;
                                userAcc = (0, _DocContract2.default)(myAddress);
                                _this$props = _this.props, expiry = _this$props.expiry, docType = _this$props.docType, minFee = _this$props.minFee;

                                //const formData = new FormData;
                                //formData.append("file",this.state.file);


                                //let testBuffer = new Buffer.from(this.state.file);
                                //console.log(testBuffer);


                                _context3.next = 16;
                                break;

                            case 13:
                                _context3.prev = 13;
                                _context3.t0 = _context3['catch'](2);

                                _this.setState({ errorMessage: _context3.t0.message });

                            case 16:

                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[2, 13]]);
            }));

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    //   fileChange = async e => {
    //     this.setState(
    //       { file: e.target.files[0], fileName: e.target.files[0].name },
    //       () => {
    //         console.log(
    //           "File chosen --->",
    //           this.state.file,
    //           console.log("File name  --->", this.state.fileName)        );


    //       }
    //     );

    //     try{

    //         this.setState({ loading : true, errorMessage : 'DOING'});
    //         let buff;
    //             var file = e.target.files[0];
    //             const reader = new FileReader();
    //             reader.onload = function(event) {
    //                 console.log(event.target.result)
    //                 buff = event.target.result;
    //               };
    //             reader.readAsArrayBuffer(file);
    //             // reader.onloadend = async () => {
    //             //     const fileBuff = Buffer(reader.result);
    //             //     ipfs.files.add(fileBuff,function(err,file){
    //             //         if(err){
    //             //             console.log(err);
    //             //         }
    //             //         else{
    //             //             fileHash = file.path;
    //             //         }
    //             //     })
    //             // }
    //             var getHash = await IPFS_Client(buff);
    //             this.setState({ hash : getHash});

    //     }catch(err){
    //         this.setState({ errorMessage : err.message});
    //     }

    //     this.setState({loading:false, errorMessage : 'DONNEEE'});

    //   };


    (0, _createClass3.default)(FileForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            var loadStyle = this.state.showLoading ? {} : { display: 'none' };
            var completeStyle = this.state.showCompleted ? {} : { display: 'none' };
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, 'Enter Document Details'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, 'Expiry'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'true/false',
                labelPosition: 'right',
                value: this.state.expiry,
                onChange: function onChange(event) {
                    _this3.setState({
                        expiry: event.target.value
                    });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, 'Type of Document'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.docType,
                onChange: function onChange(event) {
                    _this3.setState({
                        docType: event.target.value
                    });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, 'Access Fee'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minFee,
                onChange: function onChange(event) {
                    _this3.setState({
                        minFee: event.target.value
                    });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            })), _react2.default.createElement('div', { style: loadStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            }, this.loadingMessage()), _react2.default.createElement('div', { style: completeStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, this.completeMessage()), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }), _react2.default.createElement('div', { className: 'ui fluid segment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, { type: 'file', onChange: this.onFileInput,
                id: 'file',
                hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, {
                fluid: true,
                label: 'File Chosen: ',
                placeholder: 'Use the above bar to browse your file system',
                readOnly: true,
                value: this.state.fileName,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, 'Submit Document')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            }, 'HASH : ', this.state.hash));
        }
    }]);

    return FileForm;
}(_react.Component);

exports.default = FileForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnRzL3VwbG9hZE5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJBTSIsIndlYjMiLCJpcGZzQXBpIiwiRG9jQ29udHJhY3QiLCJGaWxlRm9ybSIsInN0YXRlIiwiZXhwaXJ5IiwiZG9jVHlwZSIsIm1pbkZlZSIsImhhc2giLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZmlsZSIsImZpbGVOYW1lIiwidG9CdWZmZXIiLCJhYiIsImNvbnNvbGUiLCJsb2ciLCJidWYiLCJCdWZmZXIiLCJhbGxvYyIsImJ5dGVMZW5ndGgiLCJ2aWV3IiwiVWludDhBcnJheSIsImkiLCJsZW5ndGgiLCJ1cGxvYWRGaWxlIiwiaXBmcyIsInByb3RvY29sIiwicmVzb2x2ZSIsInJlamVjdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJidWZmZXIiLCJmcm9tIiwicmVzdWx0IiwiYWRkIiwidGhlbiIsImZpbGVzIiwiY2F0Y2giLCJlcnJvciIsInJlYWRBc0FycmF5QnVmZmVyIiwibG9hZGluZ01lc3NhZ2UiLCJjb21wbGV0ZU1lc3NhZ2UiLCJvbkZpbGVJbnB1dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJzaG93TG9hZGluZyIsInRhcmdldCIsIm5hbWUiLCJtdWx0aWhhc2giLCJzaG93Q29tcGxldGVkIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiZ2V0TXlBY2NvdW50IiwiY2FsbCIsIm15QWRkcmVzcyIsInVzZXJBY2MiLCJwcm9wcyIsIm1lc3NhZ2UiLCJsb2FkU3R5bGUiLCJkaXNwbGF5IiwiY29tcGxldGVTdHlsZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7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Q0ksQUFDSyxBQUFLLEFBRVYsb0NBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0ExQ0osQUEwQ0ksQUFFSTtBQUZKO2dDQUVJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE1BQVosQUFBaUIsUUFBTyxVQUFVLEtBQWxDLEFBQXVDLEFBQ3ZDO29CQURBLEFBQ0csQUFDSDt3QkFGQTs4QkFBQTtnQ0FESixBQUNJLEFBR0E7QUFIQTs4Q0FHQSxBQUFDLHNCQUFELEFBQU07dUJBQU4sQUFFSTt1QkFGSixBQUVVLEFBQ047NkJBSEosQUFHZ0IsQUFDWjswQkFKSixBQUtJO3VCQUFPLEtBQUEsQUFBSyxNQUxoQixBQUtzQjs7OEJBTHRCO2dDQWhEWixBQTRDUSxBQUlJLEFBV1I7QUFYUTtBQUNJLGlDQVVaLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBN0RSLEFBRUksQUEyREksQUFHQSxxQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBWSxnQkFBQSxBQUFLLE1BakU3QixBQUNJLEFBZ0VRLEFBQXVCLEFBR3RDOzs7OztBQTNPa0IsQSxBQThPdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoidXBsb2FkTmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3lhY2hpbnQvREVQQV9SZWFjdCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/yachint/DEPA_React/pages/accounts/uploadNew.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/yachint/DEPA_React/pages/accounts/uploadNew.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/accounts/uploadNew")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(389).Buffer, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5iM2QwNWU1YzAzYmE5NzlmMDY4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWNjb3VudHMvdXBsb2FkTmV3LmpzPzUyOWJiYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBBTSBmcm9tICcuLi8uLi9ldGhlcmV1bS9BY2NvdW50cyc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCBpcGZzQXBpIGZyb20gJ2lwZnMtYXBpJztcbmltcG9ydCBEb2NDb250cmFjdCBmcm9tICcuLi8uLi9ldGhlcmV1bS9Eb2NDb250cmFjdCc7XG5cblxuXG5jbGFzcyBGaWxlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0ZSA9IHsgZXhwaXJ5OiBmYWxzZSwgZG9jVHlwZTogJycsIG1pbkZlZTogJycsIGhhc2g6ICcnLFxuICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJycsIGxvYWRpbmc6IGZhbHNlLCBmaWxlIDogJycsIGZpbGVOYW1lIDogJycsXG4gICAgICAgICAgICAgaGFzaDogJycsIHNob3dMb2FkaW5nOiBmYWxzZSwgc2hvd0NvbXBsZXRlZDogZmFsc2V9O1xuXG4gICB0b0J1ZmZlciA9IChhYikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiSU5TSURFXCIpO1xuICAgIHZhciBidWYgPSBCdWZmZXIuYWxsb2MoYWIuYnl0ZUxlbmd0aCk7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidWYubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgYnVmW2ldID0gdmlld1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgICB9XG5cbiAgICB1cGxvYWRGaWxlID0gYXN5bmMgKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgaXBmcyA9IGlwZnNBcGkoJ2lwZnMuaW5mdXJhLmlvJywgJzUwMDEnLCB7cHJvdG9jb2w6ICdodHRwcyd9KTtcbiAgICAgICAgICBcbiAgICAgICAgICBcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20ocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaXBmcy5hZGQoYnVmZmVyKS50aGVuKGZpbGVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlcyk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gcmVqZWN0KGVycm9yKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGxvYWRpbmdNZXNzYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVpIGljb24gbWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJub3RjaGVkIGNpcmNsZSBsb2FkaW5nIGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBKdXN0IGEgZmV3IHNlY29uZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5XZSdyZSBjdXJyZW50bHkgdXBsb2FkaW5nIHlvdXIgZG9jdW1lbnQgdG8gSVBGUy4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wbGV0ZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidWkgaWNvbiBtZXNzYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImluYm94IGljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWNjZXNmdWxseSBVcGxvYWRlZCB0byBJUEZTISBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgaGFzaCBwcm92aWRlZCB3aWxsIGFjdCBhcyB1bmlxdWUgbGluayB0byB5b3VyIGRvY3VtZW50PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuXG5cbiAgICBvbkZpbGVJbnB1dCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZyA6IHRydWUsIHNob3dMb2FkaW5nOiB0cnVlfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWxlOiBldmVudC50YXJnZXQuZmlsZXNbMF0sIGZpbGVOYW1lOiBldmVudC50YXJnZXQuZmlsZXNbMF0ubmFtZSB9LFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBcIkZpbGUgY2hvc2VuIC0tLT5cIixcbiAgICAgICAgICB0aGlzLnN0YXRlLmZpbGUsXG4gICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIG5hbWUgIC0tLT5cIiwgdGhpcy5zdGF0ZS5maWxlTmFtZSkgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH1cbiAgICApO1xuXG5cbiAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCB0aGlzLnVwbG9hZEZpbGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IG11bHRpaGFzaCA9IGZpbGVzWzBdLmhhc2g7XG4gICAgICAgIGNvbnNvbGUubG9nKG11bHRpaGFzaCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsIHNob3dMb2FkaW5nOiBmYWxzZSwgc2hvd0NvbXBsZXRlZDogdHJ1ZSwgaGFzaCA6IG11bHRpaGFzaH0pO1xuICAgIH1cblxuXG4gICAgXG5cbi8vICAgZmlsZUNoYW5nZSA9IGFzeW5jIGUgPT4ge1xuLy8gICAgIHRoaXMuc2V0U3RhdGUoXG4vLyAgICAgICB7IGZpbGU6IGUudGFyZ2V0LmZpbGVzWzBdLCBmaWxlTmFtZTogZS50YXJnZXQuZmlsZXNbMF0ubmFtZSB9LFxuLy8gICAgICAgKCkgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcbi8vICAgICAgICAgICBcIkZpbGUgY2hvc2VuIC0tLT5cIixcbi8vICAgICAgICAgICB0aGlzLnN0YXRlLmZpbGUsXG4vLyAgICAgICAgICAgY29uc29sZS5sb2coXCJGaWxlIG5hbWUgIC0tLT5cIiwgdGhpcy5zdGF0ZS5maWxlTmFtZSkgICAgICAgICk7XG4gICAgICAgIFxuICAgICAgICBcbi8vICAgICAgIH1cbi8vICAgICApO1xuXG4vLyAgICAgdHJ5e1xuXG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nIDogdHJ1ZSwgZXJyb3JNZXNzYWdlIDogJ0RPSU5HJ30pO1xuLy8gICAgICAgICBsZXQgYnVmZjtcbi8vICAgICAgICAgICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4vLyAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuLy8gICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnJlc3VsdClcbi8vICAgICAgICAgICAgICAgICBidWZmID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbi8vICAgICAgICAgICAgICAgfTtcbi8vICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbi8vICAgICAgICAgICAgIC8vIHJlYWRlci5vbmxvYWRlbmQgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgICAgICAvLyAgICAgY29uc3QgZmlsZUJ1ZmYgPSBCdWZmZXIocmVhZGVyLnJlc3VsdCk7XG4vLyAgICAgICAgICAgICAvLyAgICAgaXBmcy5maWxlcy5hZGQoZmlsZUJ1ZmYsZnVuY3Rpb24oZXJyLGZpbGUpe1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICBpZihlcnIpe1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbi8vICAgICAgICAgICAgIC8vICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLy8gICAgICAgICBlbHNle1xuLy8gICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmlsZUhhc2ggPSBmaWxlLnBhdGg7XG4vLyAgICAgICAgICAgICAvLyAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC8vICAgICB9KVxuLy8gICAgICAgICAgICAgLy8gfVxuLy8gICAgICAgICAgICAgdmFyIGdldEhhc2ggPSBhd2FpdCBJUEZTX0NsaWVudChidWZmKTtcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNoIDogZ2V0SGFzaH0pO1xuICAgICAgICAgICAgXG4vLyAgICAgfWNhdGNoKGVycil7XG4vLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2UgOiBlcnIubWVzc2FnZX0pO1xuLy8gICAgIH1cblxuLy8gICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2UsIGVycm9yTWVzc2FnZSA6ICdET05ORUVFJ30pO1xuICAgIFxuLy8gICB9O1xuXG5cbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZyA6IHRydWUsIGVycm9yTWVzc2FnZSA6ICcnfSk7XG5cbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgICAgICAgY29uc3QgbXlBZGRyZXNzID0gYXdhaXQgQU0ubWV0aG9kcy5nZXRNeUFjY291bnQoKS5jYWxsKCk7XG4gICAgICAgICAgICBjb25zdCB1c2VyQWNjID0gRG9jQ29udHJhY3QobXlBZGRyZXNzKTtcblxuICAgICAgICAgICAgY29uc3QgeyBleHBpcnksIGRvY1R5cGUsIG1pbkZlZX0gPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9jb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YTtcbiAgICAgICAgICAgIC8vZm9ybURhdGEuYXBwZW5kKFwiZmlsZVwiLHRoaXMuc3RhdGUuZmlsZSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9sZXQgdGVzdEJ1ZmZlciA9IG5ldyBCdWZmZXIuZnJvbSh0aGlzLnN0YXRlLmZpbGUpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0ZXN0QnVmZmVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZSA6IGVyci5tZXNzYWdlfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGxvYWRTdHlsZSA9IHRoaXMuc3RhdGUuc2hvd0xvYWRpbmcgPyB7fSA6IHtkaXNwbGF5IDogJ25vbmUnfTtcbiAgICAgICAgY29uc3QgY29tcGxldGVTdHlsZSA9IHRoaXMuc3RhdGUuc2hvd0NvbXBsZXRlZCA/IHt9IDoge2Rpc3BsYXkgOiAnbm9uZSd9O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8aDM+RW50ZXIgRG9jdW1lbnQgRGV0YWlsczwvaDM+XG4gICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FeHBpcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ0cnVlL2ZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmV4cGlyeX0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UeXBlIG9mIERvY3VtZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRvY1R5cGV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NUeXBlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFjY2VzcyBGZWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJ3ZWlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubWluRmVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRmVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2xvYWRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5sb2FkaW5nTWVzc2FnZSgpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29tcGxldGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb21wbGV0ZU1lc3NhZ2UoKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmbHVpZCBzZWdtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXQgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5vbkZpbGVJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJGaWxlIENob3NlbjogXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2UgdGhlIGFib3ZlIGJhciB0byBicm93c2UgeW91ciBmaWxlIHN5c3RlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbGVOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5ID5TdWJtaXQgRG9jdW1lbnQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkhBU0ggOiB7dGhpcy5zdGF0ZS5oYXNofTwvaDM+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVGb3JtO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2FjY291bnRzL3VwbG9hZE5ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7O0FBaUJBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFVQTtBQUNBO0FBZkE7QUFBQTtBQWVBO0FBQ0E7QUFEQTtBQWZBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFuQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUF1RUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFIQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBTEE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBQUE7QUFTQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQWxCQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBd0JBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUE1QkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7QUEvQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQWdDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFBQTtBQVVBO0FBVkE7QUFDQTs7QUFTQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFKQTtBQUFBO0FBUUE7QUFSQTtBQUNBOztBQU9BO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTtBQUFBO0FBVUE7QUFWQTtBQUNBO0FBU0E7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUxBO0FBV0E7QUFYQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9