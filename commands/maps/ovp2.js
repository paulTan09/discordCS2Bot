const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("overpass2")
		.setDescription("Overpass smokes part 1"),


 async execute(interaction) {
    const smoke6 = new ButtonBuilder()
    .setLabel("CT Spawn - T Mid")
    .setURL("https://youtu.be/kPAmN2clOsc")
    .setStyle(ButtonStyle.Link);

    const smoke7 = new ButtonBuilder()
    .setLabel("Water - B Cross")
    .setURL("https://youtu.be/ni_JykNSsWk")
    .setStyle(ButtonStyle.Link);

    const smoke8 = new ButtonBuilder()
    .setLabel("A Long - A Garbage")
    .setURL("https://youtu.be/UodMr5vXSMg")
    .setStyle(ButtonStyle.Link);

    const smoke9 = new ButtonBuilder()
    .setLabel("T Spawn - ABC")
    .setURL("https://youtu.be/OemcwzO9VGM")
    .setStyle(ButtonStyle.Link);


    const row = new ActionRowBuilder()
    .addComponents(smoke6, smoke7, smoke8, smoke9);

    await interaction.reply({ components: [row] });
  }
}