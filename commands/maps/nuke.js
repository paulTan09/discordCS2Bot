const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("nuke")
		.setDescription("Nuke smokes 1/1"),

 async execute(interaction) {
    const smoke = new ButtonBuilder()
    .setLabel("T Spawn - outside smoke wall")
    .setURL("https://youtu.be/v9dmUz7qjHY")
    .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder()
    .addComponents(smoke);

    await interaction.reply({ components: [row] });
  }
}