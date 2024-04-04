require(`dotenv`).config();

const tmi = require("tmi.js");

//timer is = to 1 sec. the number behind will determine how long it will wait between each discord invite msg.
//60 sec will = to 1min. 600 sec will = 10min
const timer = 600;
const timerMultiplier = timer * 1000;
const DiscordLink = process.env.DISCORD;

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true,
  },
  //login ID for the twitchbot
  identity: {
    username: process.env.USERNAME,
    password: process.env.TOKEN,
  },

  //channel name for which twitch channels the bot should join.
  channels: ["Nunulord"],
});

client.connect();
client.on("message", (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;
  //sends a response to specific messages in the chat
  if (
    message.toLowerCase() === "hey" ||
    message === "Heyge" ||
    message.toLowerCase() === "gm" ||
    message === "Gmge"
  ) {
    client.say(channel, `Gmge @${tags.username}`);
  }
  if (message.toLowerCase() === "give up") {
    client.say(channel, `yeah @${tags.username} you should give up`);
  }
  if (
    message.substring(0, 5) === "!calc" ||
    message.substring(0, 8) === "!dpscalc"
  ) {
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
  function rng() {
    rngRoll = Math.ceil(Math.random() * 100) + "%";
  }
  if (message.substring(0, 5) === "!hate") {
    rng();
    client.say(
      channel,
      `there is a ${rngRoll} chance of hate between ${tags.username} and ${messageResponse}`
    );
  }
  if (message.substring(0, 5) === "!love") {
    rng();
    client.say(
      channel,
      `there is a ${rngRoll} chance of love between ${tags.username} and ${messageResponse}`
    );
  }
  if (message.substring(0, 5) === "!opgg") {
    client.say(
      channel,
      `here is a link to their opgg https://www.op.gg/summoners/euw/${messageResponse.replace(
        "#",
        "-"
      )}`
    );
  }

  setInterval(myDiscord, timerMultiplier);
  function myDiscord() {
    client.say(channel, `join my discord here ${DiscordLink}`);
  }

  // // twitch api required to use chat commands like /timeout

  // // Check if the message is a timeout command
  // if (message.startsWith("!timeout")) {
  //   // Extract username from the message
  //   const args = message.split(" ");
  //   const username = args[1];

  //   // Send a chat message to initiate the timeout
  //   client.say(channel, `/ban humblemanwilso`);
  // }
});
