import Eris from 'eris';
import * as osUtils from 'node-os-utils';
import Colors from '../../../utils/Colors';
const { version } = require('../../../../package.json');

export default {
  name: 'about',
  description: 'About this bot',
  options: [],
  execute: async (interaction: Eris.CommandInteraction) => {
    const cpu = osUtils.cpu;
    const mem = Math.round(
      ((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100
    );

    cpu.usage().then((cpu) => {
      interaction.createMessage({
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                label: 'Website',
                style: 5,
                url: 'https://hazeliscoding.dev/lumibot',
              },
            ],
          },
          {
            type: 1,
            components: [
              {
                type: 2,
                label: 'Repository',
                style: 5,
                url: 'https://github.com/hazeliscoding/lumi',
              },
            ],
          },
        ],
        embeds: [
          {
            author: {
              name: 'About Lumi',
              icon_url: interaction.user?.avatarURL,
            },
            description: `Lumi is a multifunctional queer bot for Discord.
                            Features:
                                * Pronouns
                                * Profiles
                                * \`pronouns.page\`, \`pronouns.cc\`, \`pronouny.xyz\`, \`pronoun.is\` support
                                * Support resources
                                * HRT converter`,
            fields: [
              {
                name: 'Process',
                value: `${mem} MB}
                                    ${cpu} % CPU`,
                inline: true,
              },
              {
                name: 'Node.js version',
                value: String(process.version),
                inline: true,
              },
              {
                name: 'Lumi version',
                value: version,
                inline: true,
              },
            ],
            color: Colors.Pink,
          },
        ],
      });
    });
  },
};
