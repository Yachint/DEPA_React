const routes = require('next-routes')()

routes
    .add('/accounts/new', '/accounts/new')
    .add('/accounts/uploadNew', '/accounts/uploadNew')
    .add('/accounts/:address', '/accounts/show');


module.exports = routes;