
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("anubis2")
		.setDescription("Anubis smokes 2/2"),


 async execute(interaction) {
    const smoke6 = new ButtonBuilder()
    .setLabel("B Long - B site Temple")
    .setURL("https://youtu.be/TaomxOyX5G4")
    .setStyle(ButtonStyle.Link);

    const smoke7 = new ButtonBuilder()
    .setLabel("T Spawn - B site default left cover")
    .setURL("https://youtu.be/ZUam0rY_rcs")
    .setStyle(ButtonStyle.Link);

  
    const row = new ActionRowBuilder()
    .addComponents(smoke6, smoke7);

    await interaction.reply({ components: [row] });
  }
}