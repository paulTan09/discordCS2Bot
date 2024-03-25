
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ancient2")
		.setDescription("Ancient smokes part 2"),



 async execute(interaction) {
    const smoke1 = new ButtonBuilder()
    .setLabel("T Mid - A split")
    .setURL("https://youtu.be/DXWvl2F7P90")
    .setStyle(ButtonStyle.Link);

    const smoke2 = new ButtonBuilder()
    .setLabel("T Spawn - mid temple")
    .setURL("https://youtu.be/Bsw5yxhvmPM")
    .setStyle(ButtonStyle.Link);

    
    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2);

    await interaction.reply({ components: [row] });
  }
}