
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("vertigo2")
		.setDescription("Vertigo smokes 2/2"),


 async execute(interaction) {
    const smoke6 = new ButtonBuilder()
    .setLabel("T mid - right side CT")
    .setURL("https://youtu.be/m3qSpqChpXA")
    .setStyle(ButtonStyle.Link);

    const smoke7 = new ButtonBuilder()
    .setLabel("B site E-box")
    .setURL("https://youtu.be/T2rQK_TBv94")
    .setStyle(ButtonStyle.Link);

    const smoke8 = new ButtonBuilder()
    .setLabel("T Ramp - left side cover")
    .setURL("https://youtu.be/0DM2ovvnX60")
    .setStyle(ButtonStyle.Link);

  
    const row = new ActionRowBuilder()
    .addComponents(smoke6, smoke7, smoke8);

    await interaction.reply({ components: [row] });
  }
}
