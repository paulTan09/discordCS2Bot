const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("inferno2")
		.setDescription("Inferno smokes 2/2"),


 async execute(interaction) {
    const smoke6 = new ButtonBuilder()
    .setLabel("CT Spawn - T Mid")
    .setURL("https://youtu.be/7hSbXy9cUT8")
    .setStyle(ButtonStyle.Link);

  
    const row = new ActionRowBuilder()
    .addComponents(smoke6);

    await interaction.reply({ components: [row] });
  }
}