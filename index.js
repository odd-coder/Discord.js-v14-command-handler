const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Rest } = require("@discordjs/rest");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;
const { loadEvents } = require("./handlers/EventHandler");
const { loadCommands } = require("./handlers/commandHandler");

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages],
  partials: [User, Message, GuildMember, ThreadMember],
});

client.commands = new Collection();
client.config = require("./config/config.json");

client
  .login(client.config.TOKEN)
  .then(() => {
    loadEvents(client);
    loadCommands(client);
  })
  .catch((err) => console.log(err));
