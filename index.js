const { storeMessage, getMessages, getMessagesWhere } = require('./database');
const { getStartAndEndOfDayToUTC } = require('./date-management');
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

app.get('/day', async (req, res) => {
     const dates = getStartAndEndOfDayToUTC(req.query.created_at);

     const query = {
         created_at: {
             gte: dates.startOfDay,
             lt: dates.endOfDay,
         }
     };
     const messages = await getMessagesWhere(query);
 
     const html = await readFile('./public/views/day.html', 'utf8');
 
     const dataScript = `<script>window.events = ${JSON.stringify(messages)};</script>`;
     const responseHtml = html.replace('</body>', `${dataScript}</body>`);
 
     res.send(responseHtml);
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
    const dates = getStartAndEndOfDayToUTC(req.query.created_at);

    const query = {
        created_at: {
            gte: dates.startOfDay,
            lt: dates.endOfDay,
        }
    }

    const messages = await getMessagesWhere(query);
    res.json(messages);
});


// Static routes
app.use(express.static(path.join(__dirname, 'public')));
