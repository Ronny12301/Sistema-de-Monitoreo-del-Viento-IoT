const { readFile } = require('fs').promises;
const express = require('express');
const app = express();
const path = require('path');

const client = require('./mqtt');
const {storeMessage, getMessages} = require('./database');

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
        mqttMessage.string = mqttMessage.string.split(' ').join('');
        console.log("index.js: ", mqttMessage);

        storeMessage(mqttMessage).then(() => {
            console.log("Message stored successfully.");
        }).catch((error) => {
            console.error("Error storing message:", error);
        });
    }
    catch (e) { 
        console.error(e);
    }
});


app.get('/data', (req, res) => {
    res.send(mqttMessage);
});

app.get('/registry', async (req, res) => {
    try {
        let messages = await getMessages();
        console.log(messages);
        res.json(messages);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
});


// Static routes
app.use(express.static(path.join(__dirname, 'public')));
