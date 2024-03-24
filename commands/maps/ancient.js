//ANCIENT P1

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

    //UNFINISHED

    const smoke4 = new ButtonBuilder()
    .setLabel("T payphones - Connector")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .setStyle(ButtonStyle.Link);

    const smoke5 = new ButtonBuilder()
    .setLabel("T spawn - Mid smoke")
    .setURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    .setStyle(ButtonStyle.Link);

    

    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2, smoke3, smoke4, smoke5);

    await interaction.reply({ components: [row] });
  }
}