const routes = require('next-routes')()

routes
    .add('/accounts/new', '/accounts/new')
    .add('/accounts/uploadNew', '/accounts/uploadNew')
    .add('/accounts/:address/uploadNew', '/accounts/uploadNew')
    .add('/accounts/:address/documents/showDoc', '/accounts/documents/showDoc')
    .add('/accounts/:address', '/accounts/show');


module.exports = routes;