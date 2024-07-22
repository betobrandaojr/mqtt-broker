const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', () => {
    console.log('Publisher connected to broker');
    // Publicar uma mensagem
    client.publish('test/topic', 'Hello from publisher', (err) => {
        if (!err) {
            console.log('Message published');
            client.end(); // Fechar a conexão após publicar a mensagem
        }
    });
});
