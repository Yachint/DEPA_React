'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Accounts = require('../../ethereum/Accounts');

var _Accounts2 = _interopRequireDefault(_Accounts);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ipfsApi = require('ipfs-api');

var _ipfsApi2 = _interopRequireDefault(_ipfsApi);

var _DocContract = require('../../ethereum/DocContract');

var _DocContract2 = _interopRequireDefault(_DocContract);

var _IPFS_Client = require('../../IPFS_Client');

var _IPFS_Client2 = _interopRequireDefault(_IPFS_Client);

var _http = require('http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/yachint/DEPA_React/pages/accounts/uploadNew.js?entry';


var FileForm = function (_Component) {
    (0, _inherits3.default)(FileForm, _Component);

    function FileForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, FileForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FileForm.__proto__ || (0, _getPrototypeOf2.default)(FileForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = (0, _defineProperty3.default)({ expiry: false, docType: '', minFee: '', hash: '',
            errorMessage: '', loading: false, file: '', fileName: ''
        }, 'hash', ''), _this.toBuffer = function (ab) {
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
        }(), _this.onFileInput = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var file, files, multihash;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _this.setState({ loading: true, errorMessage: 'DOING' });
                                file = event.target.files[0];
                                _context2.next = 4;
                                return _this.uploadFile(file);

                            case 4:
                                files = _context2.sent;
                                multihash = files[0].hash;

                                console.log(multihash);
                                _this.setState({ loading: false, errorMessage: 'DONNEEE', hash: multihash });

                            case 8:
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

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 139
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                }
            }, 'Enter Document Details'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 141
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 142
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 144
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
                    lineNumber: 145
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 156
                }
            }, 'Type of Document'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.docType,
                onChange: function onChange(event) {
                    _this3.setState({
                        docType: event.target.value
                    });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
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
                    lineNumber: 167
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            }), 'new', _react2.default.createElement('div', { className: 'ui fluid segment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, { type: 'file', onChange: this.onFileInput,
                id: 'file',
                hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, {
                fluid: true,
                label: 'File Chosen: ',
                placeholder: 'Use the above bar to browse your file system',
                readOnly: true,
                value: this.state.fileName,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, 'Submit Document')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, 'HASH : ', this.state.hash));
        }
    }]);

    return FileForm;
}(_react.Component);

exports.default = FileForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnRzL3VwbG9hZE5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJBTSIsIndlYjMiLCJpcGZzQXBpIiwiRG9jQ29udHJhY3QiLCJJUEZTX0NsaWVudCIsImdldCIsIkZpbGVGb3JtIiwic3RhdGUiLCJleHBpcnkiLCJkb2NUeXBlIiwibWluRmVlIiwiaGFzaCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJmaWxlIiwiZmlsZU5hbWUiLCJ0b0J1ZmZlciIsImFiIiwiY29uc29sZSIsImxvZyIsImJ1ZiIsIkJ1ZmZlciIsImFsbG9jIiwiYnl0ZUxlbmd0aCIsInZpZXciLCJVaW50OEFycmF5IiwiaSIsImxlbmd0aCIsInVwbG9hZEZpbGUiLCJpcGZzIiwicHJvdG9jb2wiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZGVuZCIsImJ1ZmZlciIsImZyb20iLCJyZXN1bHQiLCJhZGQiLCJ0aGVuIiwiZmlsZXMiLCJjYXRjaCIsImVycm9yIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbkZpbGVJbnB1dCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJtdWx0aWhhc2giLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRNeUFjY291bnQiLCJjYWxsIiwibXlBZGRyZXNzIiwidXNlckFjYyIsInByb3BzIiwibWVzc2FnZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBVTs7OztBQUNq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LEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxxQ0FBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBVSxBQUNqQjsyQkFBQSxBQUFLO2lDQUNRLE1BQUEsQUFBTSxPQURuQixBQUFjLEFBQ1ksQUFFN0I7QUFIaUIsQUFDVjtBQUpSOzhCQUFBO2dDQWhCUixBQWNJLEFBRUksQUFRSjtBQVJJO0FBQ0EsaUNBT0gsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsK0JBQUEsQUFBQzt1QkFBRCxBQUNNLEFBQ047K0JBRkEsQUFFZ0IsQUFDaEI7dUJBQU8sS0FBQSxBQUFLLE1BSFosQUFHa0IsQUFDbEI7MEJBQVUsa0JBQUEsQUFBQyxPQUFVLEFBQ2pCOzJCQUFBLEFBQUs7Z0NBQ08sTUFBQSxBQUFNLE9BRGxCLEFBQWMsQUFDVyxBQUU1QjtBQUhpQixBQUNWO0FBTlI7OEJBQUE7Z0NBMUJSLEFBd0JJLEFBRUksQUFVSjtBQVZJO0FBQ0EsaUNBU0osQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FwQ0osQUFvQ0k7QUFBQTtnQkFHSSx1QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDLHNCQUFELEFBQU0sU0FBTSxNQUFaLEFBQWlCLFFBQU8sVUFBVSxLQUFsQyxBQUF1QyxBQUN2QztvQkFEQSxBQUNHLEFBQ0g7d0JBRkE7OEJBQUE7Z0NBREosQUFDSSxBQUdBO0FBSEE7OENBR0EsQUFBQyxzQkFBRCxBQUFNO3VCQUFOLEFBRUk7dUJBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2dCLEFBQ1o7MEJBSkosQUFLSTt1QkFBTyxLQUFBLEFBQUssTUFMaEIsQUFLc0I7OzhCQUx0QjtnQ0EzQ1osQUF1Q1EsQUFJSSxBQVdSO0FBWFE7QUFDSSxpQ0FVWixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7OEJBQUE7Z0NBQUE7QUFBQTtlQXhEUixBQUVJLEFBc0RJLEFBR0EscUNBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVksZ0JBQUEsQUFBSyxNQTVEN0IsQUFDSSxBQTJEUSxBQUF1QixBQUd0Qzs7Ozs7QUE3TGtCLEEsQUFnTXZCOztrQkFBQSxBQUFlIiwiZmlsZSI6InVwbG9hZE5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS95YWNoaW50L0RFUEFfUmVhY3QifQ==