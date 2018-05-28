const model = require('../database/db-models');

const APIError = require('../middlewares/rest').APIError;
let User = model.User;


module.exports = {

    'a':'b',

    'GET /api/users': async (ctx, next) => {
        let bodys = await User.findAll();
        if (bodys) {
            ctx.rest({users: bodys});
        } else {
            throw new APIError('users:not_found', 'user not found by id.');
        }
    }

};
