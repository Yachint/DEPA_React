const routes = require('next-routes')()

routes
    .add('/accounts/new', '/accounts/new')
    .add('/accounts/uploadNew', '/accounts/uploadNew')
    .add('/accounts/User/manage/:address/requests','/accounts/User/requests')
    .add('/accounts/User/manage/:address', '/accounts/User/manage')
    .add('/accounts/ThirdParty/manage/:address', '/accounts/ThirdParty/manage')
    .add('/accounts/:address/uploadNew', '/accounts/uploadNew')
    .add('/accounts/:address/documents/:id/:fee/showDoc', '/accounts/documents/showDoc')
    .add('/accounts/:address', '/accounts/show');


module.exports = routes;