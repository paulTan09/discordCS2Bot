const {SlashCommandBuilder} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("user")
  .setDescription("Provides info about the user"),

  async execute(interaction) {
    // interaction.user = obiectul care reprezinta userul care a rulat cmd
    // interaction.member = obiect GuildMembers adica userul din guild/serverul specific
    await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
  },
};