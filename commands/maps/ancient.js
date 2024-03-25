
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ancient1")
		.setDescription("Ancient smokes part 1"),



 async execute(interaction) {
    const smoke1 = new ButtonBuilder()
    .setLabel("Lane - B Long")
    .setURL("https://youtu.be/S8wRgmTPnIs")
    .setStyle(ButtonStyle.Link);

    const smoke2 = new ButtonBuilder()
    .setLabel("B Main - B short")
    .setURL("https://youtu.be/4keLEJGgNCo")
    .setStyle(ButtonStyle.Link);

    const smoke3 = new ButtonBuilder()
    .setLabel("T Spawn - lane cave")
    .setURL("https://youtu.be/aay06l1vRPM")
    .setStyle(ButtonStyle.Link);

    

    const smoke4 = new ButtonBuilder()
    .setLabel("A Main - A donut")
    .setURL("https://youtu.be/tVx-_Ngyc1E")
    .setStyle(ButtonStyle.Link);

    const smoke5 = new ButtonBuilder()
    .setLabel("T elbow - mid donut")
    .setURL("https://youtu.be/U95foWLQZj0")
    .setStyle(ButtonStyle.Link);

    

    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2, smoke3, smoke4, smoke5);

    await interaction.reply({ components: [row] });
  }
}