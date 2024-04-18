const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://localhost:1883");
// const client = mqtt.connect("mqtt://test.mosquitto.org:1883");


client.on("connect", () => {
  client.subscribe("ronny12301/test", (err) => {
    if (!err) {
      client.publish("test/ronny", "␂Q,136,000.49,M,00,␃17");
    }
  });
});

module.exports = client;