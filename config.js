var restify = require('restify');
var redis = require('./modules/redisDao/redisConnection');

module.exports = () => {
    var server = restify.createServer();
    server.get('/hello/:name', respond);
    server.head('/hello/:name', respond);

    function respond(req, res, next) {
        redis.set(req.params.name, 'Bem Vindo');
        redis.get(req.params.name, function (err, result) {
          console.log(result);
        });
        res.send(JSON.stringify({ mensagem: `ola ${req.params.name}` }));
        next();
    }
    return server;
}

