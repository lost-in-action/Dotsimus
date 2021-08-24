const { Client, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js'),
    db = require('../../../db'),
    perspective = require('../../../api/perspective');

module.exports = {
    name: 'sendToxicityEmbed',
    type: 'button',
    description: 'Sends Toxicity embed in the channel.',
    async execute(client, interaction) {

        if(interaction.isButton()) {
            interaction.update({
                content: `Message has been sent to channel.`,
                components: []
            })
        }
        const embedResponse = new MessageEmbed()
            .setColor('#ffbd2e')
            .addFields(interaction.message.embeds[0].fields)
            .setTimestamp()
            .setFooter(`${interaction.user.tag} | ${interaction.user.id}`, `https://cdn.discordapp.com/avatars/${interaction.user.id}/${interaction.user.avatar}.png`)
        interaction.channel.send({
            embeds: [embedResponse]
        })

    },
};