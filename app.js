const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const controller = require('./middleware/controller');
const rest = require('./middleware/rest');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// bind .rest() for ctx:
app.use(rest.restify());

// add controller:
app.use(controller());

app.listen(3000);

console.log('app started at port 3000...');
