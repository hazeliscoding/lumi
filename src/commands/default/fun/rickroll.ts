import Eris from 'eris';

export default {
  name: 'rickroll',
  description: 'Never gonna give you up, never gonna let you down...',
  options: [],
  execute: async (interaction: Eris.CommandInteraction) => {
    interaction.createMessage('https://www.youtube.com/watch?v=oHg5SJYRHA0');
  },
};
