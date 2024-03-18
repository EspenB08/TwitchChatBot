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

  if (message.toLowerCase() === "hey" || message === "Heyge") {
    client.say(channel, `Heyge @${tags.username}`);
  }
if (message.toLowerCase() === "give up") {
  client.say(channel, `yeah @${tags.username} you should give up`);
}
if (message.includes("calc") || message.includes("dpscalc")) {
  client.say(
    channel,
    `hey @${tags.username} here is a link for the dps calc https://tools.runescape.wiki/osrs-dps/`
  );
}
if (message.toLocaleLowerCase() ==="hate"+" "){
client.say(channel, `there is a 50% chance of hate between ${tags.username} and ${message}`)
}
//twitch api required to use chat commands like /timeout
//// if (message.includes("helq")){
////     client.say(channel, `/timeout ${tags.username} 10`)
//// }
// // if (message.includes("helq")){
// //     client.timeout(channel, tags.username, 80)
// // }
});
