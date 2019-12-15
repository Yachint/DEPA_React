'use strict';

var routes = require('next-routes')();

routes.add('/accounts/new', '/accounts/new').add('/accounts/uploadNew', '/accounts/uploadNew').add('/accounts/:address/uploadNew', '/accounts/uploadNew').add('/accounts/:address/documents/showDoc', '/accounts/documents/showDoc').add('/accounts/:address', '/accounts/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGlCQUMwQixBQUQxQixpQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsdUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3lDLEFBSHpDLHVCQUlLLEFBSkwsSUFJUyxBQUpULHdDQUlpRCxBQUpqRCwrQkFLSyxBQUxMLElBS1MsQUFMVCxzQkFLK0IsQUFML0I7O0FBUUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS95YWNoaW50L0RFUEFfUmVhY3QifQ==