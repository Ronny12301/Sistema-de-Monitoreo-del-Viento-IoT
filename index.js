const { readFile } = require('fs').promises;
const express = require('express');
const app = express();
const path = require('path');

const client = require('./mqtt');

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

    try {
        // message is Buffer
        mqttMessage = JSON.parse(message.toString()); 
        console.log(mqttMessage);
    }
    catch (e) { 
        console.error(e);
    }
});


app.get('/data', (req, res) => {
    res.send(mqttMessage);
});




// Static routes
app.use(express.static(path.join(__dirname, 'public')));
