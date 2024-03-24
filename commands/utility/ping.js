const {SlashCommandBuilder} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("ping")
  .setDescription("raspunde cu pong (source??)"),

  async execute(interaction) {
    await interaction.reply("get donked kid");
  },
};