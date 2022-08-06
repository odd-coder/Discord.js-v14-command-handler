const {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("breakup")
    .setDescription("breakup with your gf(not for girls)")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  /**
   * @param {CommandInteraction} interaction
   */
  execute(interaction) {
    interaction.reply({
      content: "You have gf? LMAO LMFAO XD GO GET A LIFE KIDDO",
      ephemeral: true,
    });
  },
};
