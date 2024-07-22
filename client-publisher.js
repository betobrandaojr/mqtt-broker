const mqtt = require('mqtt');
const clientPublisher = mqtt.connect('mqtt://localhost:1883');

clientPublisher.on('connect', () => {
    console.log('Connected to broker');
    clientPublisher.subscribe('test/topic', (err) => {
        if (!err) {
            clientPublisher.publish('test/topic', 'Hello MQTT');
        }
    });
});

clientPublisher.on('message', (topic, message) => {
    console.log(`Received message: ${message.toString()} on topic: ${topic}`);
});
