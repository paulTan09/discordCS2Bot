const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("overpass")
		.setDescription("Overpass smokes part 1"),


 async execute(interaction) {
    const smoke1 = new ButtonBuilder()
    .setLabel("T Spawn - Toilet")
    .setURL("https://youtu.be/6EVznDtikVQ")
    .setStyle(ButtonStyle.Link);

    const smoke2 = new ButtonBuilder()
    .setLabel("Water - Heaven")
    .setURL("https://youtu.be/Lkd5I5TxZoo")
    .setStyle(ButtonStyle.Link);

    const smoke3 = new ButtonBuilder()
    .setLabel("A Banana - A Garbage")
    .setURL("https://youtu.be/bRMpUKrO8GE")
    .setStyle(ButtonStyle.Link);

    const smoke4 = new ButtonBuilder()
    .setLabel("Party - Bank")
    .setURL("https://youtu.be/_uf7Yhc6GtI")
    .setStyle(ButtonStyle.Link);

    const smoke5 = new ButtonBuilder()
    .setLabel("CT Spawn - Monster")
    .setURL("https://youtu.be/s2c-jL3pO6U")
    .setStyle(ButtonStyle.Link);

    

    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2, smoke3, smoke4, smoke5);

    await interaction.reply({ components: [row] });
  }
}
