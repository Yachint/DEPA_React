'use strict';

var routes = require('next-routes')();

routes.add('/accounts/new', '/accounts/new').add('/accounts/uploadNew', '/accounts/uploadNew').add('/accounts/User/manage/:address/requests', '/accounts/User/requests').add('/accounts/User/manage/:address', '/accounts/User/manage').add('/accounts/ThirdParty/manage/:address', '/accounts/ThirdParty/manage').add('/accounts/:address/uploadNew', '/accounts/uploadNew').add('/accounts/:address/documents/:id/:fee/showDoc', '/accounts/documents/showDoc').add('/accounts/:address', '/accounts/show');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGlCQUMwQixBQUQxQixpQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsdUJBR0ssQUFITCxJQUdTLEFBSFQsMkNBR21ELEFBSG5ELDJCQUlLLEFBSkwsSUFJUyxBQUpULGtDQUkyQyxBQUozQyx5QkFLSyxBQUxMLElBS1MsQUFMVCx3Q0FLaUQsQUFMakQsK0JBTUssQUFOTCxJQU1TLEFBTlQsZ0NBTXlDLEFBTnpDLHVCQU9LLEFBUEwsSUFPUyxBQVBULGlEQU8wRCxBQVAxRCwrQkFRSyxBQVJMLElBUVMsQUFSVCxzQkFRK0IsQUFSL0I7O0FBV0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJHOi9ERVBBX1JlYWN0In0=