var Redis = require('ioredis');
var enviroment = require('../config/config').getConfig();

module.exports = new Redis(enviroment.redis.port, enviroment.redis.url);
