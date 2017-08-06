const model = require('./db-models');

let Pet = model.Pet;
let User = model.User;

(async () => {
    
    var user = await User.create({
        name: 'John',
        gender: false,
        email: 'john-' + Date.now() + '@garfield.pet',
        passwd: 'hahaha'
    });
    console.log('created: ' + JSON.stringify(user));

})();