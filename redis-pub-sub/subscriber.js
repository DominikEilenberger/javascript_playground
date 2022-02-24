const redis = require('redis');
const subscriber = redis.createClient();
subscriber.connect();
/*
subscriber.on("message", function (channel, message) {
    console.log(`Message: ${message} on channel: ${channel}`);
});
*/

subscriber.subscribe("notification", function(message) {
    console.log(message); // 'message'
  });;

//https://dev.to/franciscomendes10866/using-redis-pub-sub-with-node-js-13k3