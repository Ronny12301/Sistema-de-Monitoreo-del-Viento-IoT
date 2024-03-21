const { readFile } = require('fs').promises;
const app = require('express')();
const PORT = 8080;

const client = require('./mqtt'); // Adjust the path as necessary

app.listen(
    PORT,
    () => console.log(`Ejecutando en http://localhost:${PORT}`),
);

app.get('/', async (req, res) => {
    res.send( await readFile('./views/index.html', 'utf8'));
});


let mqttMessage;
client.on("message", (topic, message) => {
    // message is Buffer
    mqttMessage = message.toString();
    console.log(message.toString());
});


app.get('/data', (req, res) => {
    res.send(mqttMessage);
});