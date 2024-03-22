const { readFile } = require('fs').promises;
const express = require('express');
const app = express();
const path = require('path');

const client = require('./mqtt'); // Adjust the path as necessary

const PORT = 8080;


app.listen(
    PORT,
    () => console.log(`Ejecutando en http://localhost:${PORT}`),
);

app.get('/', async (req, res) => {
    res.send( await readFile('./public/views/index.html', 'utf8'));
});



let mqttMessage;
client.on("message", (topic, message) => {
    // message is Buffer
    mqttMessage = message.toString();
    console.log(mqttMessage);
});


app.get('/data', (req, res) => {
    res.send(mqttMessage);
});




// Static routes
app.use(express.static(path.join(__dirname, 'public')));
