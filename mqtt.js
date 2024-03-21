const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://test.mosquitto.org:1883");


client.on("connect", () => {
  client.subscribe("test/ronny", (err) => {
    if (!err) {
      client.publish("test/ronny", "Hello mqtt");
    }
  });
});

// client.on("message", (topic, message) => {
//   // message is Buffer
//   console.log(message.toString());
// });


module.exports = client;