const { storeMessage, getMessages, getMessagesWhere } = require('./database');
const { getStartAndEndOfDayToUTC } = require('./helpers/date-management');

const { view } = require('./helpers/views-management');
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
    res.send( await view('index') );
});

app.get('/archive', async (req, res) => {
    res.send( await view('archive') );
});

app.get('/day', async (req, res) => {
     const dates = getStartAndEndOfDayToUTC(req.query.created_at);

     const query = {
         created_at: {
                gte: dates.startOfDay,
                lt: dates.endOfDay,
         }
     };

     const msg = await getMessagesWhere(query);
 
     res.send( await view('day', {
        messages: msg.data,
    }));
});

app.get('/day-table', async (req, res) => {
    const dates = getStartAndEndOfDayToUTC(req.query.created_at);

    const query = {
        created_at: {
               gte: dates.startOfDay,
               lt: dates.endOfDay,
        }
    };

    const messages = await getMessagesWhere(query);

    res.send( await view('day-table', {
        messages: messages,
    }));
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
            conon("message", (topic, sole.error("Error storing message:", error);
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
        const messages = await getMessages();
        res.json(messages);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
});

app.get('/day-data', async (req, res) => {
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
