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
  channels: ["NunuLord"],
});

client.connect();

client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === "hey" || message === "Heyge" ||message.toLowerCase() === "gm") {
    client.say(channel, `Gmge @${tags.username}`);
  }
if (message.toLowerCase() === "give up") {
  client.say(channel, `yeah @${tags.username} you should give up`);
}
if (message.includes("!calc") || message.includes("!dpscalc")) {
  client.say(
    channel,
    `hey @${tags.username} here is a link for the dps calc https://tools.runescape.wiki/osrs-dps/`
  );
}
// if (message.includes(`${channel.slice(1)}`)){
//   client.say(channel, `hvis @${channel.slice(1)} reads this he lost`)
// }
const messageToArray = message.split(" ");
const messageResponse = messageToArray[1];
function rng(){
rngRoll = Math.ceil(Math.random() * 100)+"%";

}
if (message.substring(0, 5) === "!hate"){
  rng()
client.say(channel, `there is a ${rngRoll} chance of hate between ${tags.username} and ${messageResponse}`)
}
if (message.substring(0, 5) === "!love"){
  rng()
  client.say(channel, `there is a ${rngRoll} chance of love between ${tags.username} and ${messageResponse}`)
  
}
if (message.substring(0, 5) ==="!opgg"){
  client.say(
    channel,
    `here is a link to their opgg https://www.op.gg/summoners/euw/${messageResponse.replace("#", "-")}`
  );
}

//twitch api required to use chat commands like /timeout
//// if (message.includes("helq")){
////     client.say(channel, `/timeout ${tags.username} 10`)
//// }
// // if (message.includes("helq")){
// //     client.timeout(channel, tags.username, 80)
// // }
});
