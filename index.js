const { storeMessage, getMessages, getMessagesWhere } = require('./database');
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

app.get('/archive', async (req, res) => {
    res.send( await readFile('./public/views/archive.html', 'utf8'));
});



let mqttMessage;
client.on("message", (topic, message) => {

    try {
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
        console.error(e.message);
    }
});


app.get('/data', (req, res) => {
    res.send(mqttMessage);
});

app.get('/registry', async (req, res) => {
    try {
        let messages = await getMessages();
        res.json(messages);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
});

app.get('/getDayData', async (req, res) => {
    const startOfDay = new Date(req.query.created_at);
    const offset = new Date().getTimezoneOffset()/60;
    startOfDay.addHours(offset);
    
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(startOfDay.getDate() + 1);

    const query = {
        created_at: {
            gte: startOfDay,
            lt: endOfDay,
        }
    }

    const messages = await getMessagesWhere(query);
    res.json(messages);
});


// Static routes
app.use(express.static(path.join(__dirname, 'public')));




// https://stackoverflow.com/questions/1050720/how-to-add-hours-to-a-date-object
Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}