const {SlashCommandBuilder} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("server")
  .setDescription("Provides info about the server."),
  async execute(interaction) {
    //interaction.guild = obiectul care repr. serverul din care a fost rulata cmd
    await interaction.reply (`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
  },
};