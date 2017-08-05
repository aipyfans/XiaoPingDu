var products = [{
    name: 'iPhone',
    price: 6999
}, {
    name: 'Kindle',
    price: 999
}];

const model = require('../database/db-models');
let User = model.User;

module.exports = {
    'GET /api/products': async (ctx, next) => {

        let bodys = await User.findAll();

        ctx.response.type = 'application/json';
        ctx.response.body = { products: bodys };
    },

    'POST /api/products': async (ctx, next) => {
        var p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
};
