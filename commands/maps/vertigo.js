
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, PermissionFlagsBits, ActionRow} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("vertigo1")
		.setDescription("Vertigo smokes part 1"),


 async execute(interaction) {
    const smoke1 = new ButtonBuilder()
    .setLabel("CT - A Ramp")
    .setURL("https://www.youtube.com/watch?v=ToG9JfeQwjA")
    .setStyle(ButtonStyle.Link);

    const smoke2 = new ButtonBuilder()
    .setLabel("T Spawn - A Ramp gap")
    .setURL("https://www.youtube.com/watch?v=wC2VqrEg76M")
    .setStyle(ButtonStyle.Link);

    const smoke3 = new ButtonBuilder()
    .setLabel("A Ramp sandbags - left side default")
    .setURL("https://www.youtube.com/watch?v=jdYA3kZtbIo")
    .setStyle(ButtonStyle.Link);

    const smoke4 = new ButtonBuilder()
    .setLabel("T mid - CT mid cover")
    .setURL("https://www.youtube.com/watch?v=MFeQe3IKYRY")
    .setStyle(ButtonStyle.Link);

    const smoke5 = new ButtonBuilder()
    .setLabel("T mid - CT spawn")
    .setURL("https://www.youtube.com/watch?v=l3eSOIrHwFg")
    .setStyle(ButtonStyle.Link);

    

    const row = new ActionRowBuilder()
    .addComponents(smoke1, smoke2, smoke3, smoke4, smoke5);

    await interaction.reply({ components: [row] });
  }
}
