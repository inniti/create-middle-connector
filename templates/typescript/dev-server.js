const { createServer } = require('@inniti/middle');
const Connector = require('./dist/index.js').default;

const server = createServer({
    connectors: [new Connector()],
    cache: undefined,
    plugins: []
});

server
    .listen(process.env.PORT || 4000)
    .then((ctx) => {
        console.log(`🚀 middle is running at ${ctx.url}`);
    });
