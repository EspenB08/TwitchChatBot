require(`dotenv`).config();

const tmi = require("tmi.js");

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  identity: {
    username: "NunuLord",
    password: process.env.TOKEN,
  },
  channels: ["exoristic", "nunulord"],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === "hey") {
    client.say(channel, `@${tags.username}, Yo what's up`);
  }
if (message.toLowerCase() === "give up") {
  client.say(channel, `yeah @${tags.username} you should give up`);
}
});
