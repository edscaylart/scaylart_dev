export const profile = {
  character: {
    name: 'Edson Souza',
    race: 'Human',
    class: 'Software Engineer',
    level: new Date().getFullYear() - 2011,
  },
  attributes: [
    { label: 'strength', value: 8 },
    { label: 'dexterity', value: 15 },
    { label: 'constitution', value: 14 },
    { label: 'intelligence', value: 16 },
    { label: 'wisdom', value: 12 },
    { label: 'charisma', value: 10 },
  ],
}

export type IProfileCharacter = typeof profile.character
export type IProfileAttribute = typeof profile.attributes[0]