const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");
const { loadCommands } = require("../../handlers/commandHandler");
const { loadEvents } = require("../../handlers/EventHandler");

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload your events/commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) =>
      options.setName("events").setDescription("Reload your events")
    )
    .addSubcommand((options) =>
      options.setName("commands").setDescription("Reload your commands")
    ),
  /**
   * @param {ChatInputCommandInteraction} interaction
   */
  execute(interaction, client) {
    const sub = interaction.options.getSubcommand();
    switch (sub) {
      case "events":
        {
          loadEvents(client);
          interaction.reply({ content: "Reloaded the events." });
        }
        break;
      case "commands":
        {
          loadCommands(client);
          interaction.reply({ content: "Reloaded the commands" });
        }
        break;
    }
  },
};
