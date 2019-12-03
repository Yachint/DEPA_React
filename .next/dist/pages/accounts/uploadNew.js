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
        }, (0, _defineProperty3.default)(_this$state, 'hash', ''), (0, _defineProperty3.default)(_this$state, 'showLoading', false), (0, _defineProperty3.default)(_this$state, 'showCompleted', false), _this$state), _this.uploadFile = function () {
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
                    lineNumber: 34
                }
            }, _react2.default.createElement('i', { 'class': 'notched circle loading icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('div', { 'class': 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement('div', { 'class': 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, 'Just a few seconds'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, 'We\'re currently uploading your document to IPFS...')));
        }, _this.completeMessage = function () {
            return _react2.default.createElement('div', { 'class': 'ui icon message', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('i', { 'class': 'inbox icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement('div', { 'class': 'content', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', { 'class': 'header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Succesfully Uploaded to IPFS!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
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
                var accounts, myAddress, userAcc, _this$state2, expiry, docType, minFee, hash;

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
                                return _Accounts2.default.methods.getMyAccount(accounts[0]).call();

                            case 8:
                                myAddress = _context3.sent;

                                console.log(myAddress);
                                userAcc = (0, _DocContract2.default)(myAddress);
                                _this$state2 = _this.state, expiry = _this$state2.expiry, docType = _this$state2.docType, minFee = _this$state2.minFee, hash = _this$state2.hash;
                                _context3.next = 14;
                                return userAcc.methods.submitDocument(expiry, docType, minFee, hash).send({
                                    from: accounts[0]
                                });

                            case 14:
                                _context3.next = 19;
                                break;

                            case 16:
                                _context3.prev = 16;
                                _context3.t0 = _context3['catch'](2);

                                _this.setState({ errorMessage: _context3.t0.message });

                            case 19:

                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[2, 16]]);
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
                    lineNumber: 159
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, 'Enter Document Details'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
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
                    lineNumber: 165
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 176
                }
            }, 'Type of Document'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.docType,
                onChange: function onChange(event) {
                    _this3.setState({
                        docType: event.target.value
                    });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 177
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
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
                    lineNumber: 187
                }
            })), _react2.default.createElement('div', { style: loadStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, this.loadingMessage()), _react2.default.createElement('div', { style: completeStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, this.completeMessage()), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }), _react2.default.createElement('div', { className: 'ui fluid segment', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, { type: 'file', onChange: this.onFileInput,
                id: 'file',
                hidden: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, {
                fluid: true,
                label: 'File Chosen: ',
                placeholder: 'Use the above bar to browse your file system',
                readOnly: true,
                value: this.state.fileName,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, 'Submit Document')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, 'HASH : ', this.state.hash));
        }
    }]);

    return FileForm;
}(_react.Component);

exports.default = FileForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2FjY291bnRzL3VwbG9hZE5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJBTSIsIndlYjMiLCJpcGZzQXBpIiwiRG9jQ29udHJhY3QiLCJGaWxlRm9ybSIsInN0YXRlIiwiZXhwaXJ5IiwiZG9jVHlwZSIsIm1pbkZlZSIsImhhc2giLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwiZmlsZSIsImZpbGVOYW1lIiwidXBsb2FkRmlsZSIsImlwZnMiLCJwcm90b2NvbCIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkZW5kIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsInJlc3VsdCIsImFkZCIsInRoZW4iLCJmaWxlcyIsImNhdGNoIiwiZXJyb3IiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImxvYWRpbmdNZXNzYWdlIiwiY29tcGxldGVNZXNzYWdlIiwib25GaWxlSW5wdXQiLCJldmVudCIsInNldFN0YXRlIiwic2hvd0xvYWRpbmciLCJ0YXJnZXQiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsIm11bHRpaGFzaCIsInNob3dDb21wbGV0ZWQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRNeUFjY291bnQiLCJjYWxsIiwibXlBZGRyZXNzIiwidXNlckFjYyIsInN1Ym1pdERvY3VtZW50Iiwic2VuZCIsIm1lc3NhZ2UiLCJsb2FkU3R5bGUiLCJkaXNwbGF5IiwiY29tcGxldGVTdHlsZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8s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QUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDLHNCQUFELEFBQU0sU0FBTSxNQUFaLEFBQWlCLFFBQU8sVUFBVSxLQUFsQyxBQUF1QyxBQUN2QztvQkFEQSxBQUNHLEFBQ0g7d0JBRkE7OEJBQUE7Z0NBREosQUFDSSxBQUdBO0FBSEE7OENBR0EsQUFBQyxzQkFBRCxBQUFNO3VCQUFOLEFBRUk7dUJBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2dCLEFBQ1o7MEJBSkosQUFLSTt1QkFBTyxLQUFBLEFBQUssTUFMaEIsQUFLc0I7OzhCQUx0QjtnQ0FoRFosQUE0Q1EsQUFJSSxBQVdSO0FBWFE7QUFDSSxpQ0FVWixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7OEJBQUE7Z0NBQUE7QUFBQTtlQTdEUixBQUVJLEFBMkRJLEFBR0EscUNBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVksZ0JBQUEsQUFBSyxNQWpFN0IsQUFDSSxBQWdFUSxBQUF1QixBQUd0Qzs7Ozs7QUF6TmtCLEEsQUE0TnZCOztrQkFBQSxBQUFlIiwiZmlsZSI6InVwbG9hZE5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS95YWNoaW50L0RFUEFfUmVhY3QifQ==