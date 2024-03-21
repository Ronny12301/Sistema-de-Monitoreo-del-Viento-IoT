const { readFile } = require('fs').promises;
const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

const client = require('./mqtt'); // Adjust the path as necessary

app.listen(
    PORT,
    () => console.log(`Ejecutando en http://localhost:${PORT}`),
);

app.get('/', async (req, res) => {
    res.send( await readFile('./views/index.html', 'utf8'));
});

app.use(express.static(path.join(__dirname, 'views')));


let mqttMessage;
client.on("message", (topic, message) => {
    // message is Buffer
    mqttMessage = message.toString();
    console.log(message.toString());
});


app.get('/data', (req, res) => {
    res.send(mqttMessage);
});