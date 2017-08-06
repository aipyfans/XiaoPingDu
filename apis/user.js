const model = require('../database/db-models');

const APIError = require('../middlewares/rest').APIError;
let User = model.User;


module.exports = {
    
    'GET /api/users': async (ctx, next) => {
        let bodys = await User.findAll();
        ctx.response.type = 'application/json';
        ctx.response.body = { users: bodys };

        // throw new APIError('users:not_found', 'user not found by id.');
    }

};
