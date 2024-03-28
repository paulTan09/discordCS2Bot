const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("inferno")
		.setDescription("Inferno smokes part 1"),



 async execute(interaction) {
    const smoke1 = new ButtonBuilder()
    .setLabel("Banana - CT")
    .setURL("https://youtu.be/HOaauKhfjMw")
    .setStyle(ButtonStyle.Link);

    const smoke2 = new ButtonBuilder()
    .setLabel("Banana - Coffin")
    .setURL("https://youtu.be/X7kRLDyPvGQ")
    .setStyle(ButtonStyle.Link);

    const smoke3 = new ButtonBuilder()
    .setLabel("Alt Mid - Long")
    .setURL("https://youtu.be/b5vZIQBOOEI")
    .setStyle(ButtonStyle.Link);

    

    const smoke4 = new ButtonBuilder()
    .setLabel("Mid - Moto")
    .setURL("https://youtu.be/uITVKTBv7No")
    .setStyle(ButtonStyle.Link);

    const smoke5 = new ButtonBuilder()
    .setLabel("Mid - Library")
    .setURL("https://youtu.be/Mt-n_79tRH0")
    .setStyle(ButtonStyle.Link);

    

    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2, smoke3, smoke4, smoke5);

    await interaction.reply({ components: [row] });
  }
}