const redis = require('redis');

async function createPublisher() {
    const publisher = redis.createClient();
    await publisher.connect();
    await publisher.publish('notification', "Test_Message", function(){
        console.log('Message got published to redis.');
    });

    publisher.on('error', function (err) {console.log(err);})
}

createPublisher();