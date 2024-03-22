const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");
// const client = mqtt.connect("mqtt://test.mosquitto.org:1883");


client.on("connect", () => {
  client.subscribe("test/ronny", (err) => {
    if (!err) {
      client.publish("test/ronny", "␂Q,136,000.49,M,00,␃17");
    }
  });
});

// client.on("message", (topic, message) => {
//   // message is Buffer
//   console.log(message.toString());
// });


module.exports = client;