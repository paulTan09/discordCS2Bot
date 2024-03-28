
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("anubis")
		.setDescription("Anubis smokes 1/2"),



 async execute(interaction) {
    const smoke1 = new ButtonBuilder()
    .setLabel("T rags - A Camera")
    .setURL("https://youtu.be/ybRxeLA_nxY")
    .setStyle(ButtonStyle.Link);

    const smoke2 = new ButtonBuilder()
    .setLabel("CT Temple - Bridge")
    .setURL("https://youtu.be/0kprb0uV88M")
    .setStyle(ButtonStyle.Link);

    const smoke3 = new ButtonBuilder()
    .setLabel("T rags - A Main")
    .setURL("https://youtu.be/VZ5-MQaga2c")
    .setStyle(ButtonStyle.Link);

    const smoke4 = new ButtonBuilder()
    .setLabel("T payphones - Connector")
    .setURL("https://youtu.be/f-CJ67VYUC8")
    .setStyle(ButtonStyle.Link);

    const smoke5 = new ButtonBuilder()
    .setLabel("T spawn - Mid smoke")
    .setURL("https://youtu.be/xzEe3gNaurs")
    .setStyle(ButtonStyle.Link);

    

    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2, smoke3, smoke4, smoke5);

    await interaction.reply({ components: [row] });
  }
}