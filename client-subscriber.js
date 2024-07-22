const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
    console.log('Subscriber connected to broker');
    client.subscribe('test/topic', (err) => {
        if (!err) {
            console.log('Subscriber subscribed to test/topic');
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`Received message: ${message.toString()} on topic: ${topic}`);
});
