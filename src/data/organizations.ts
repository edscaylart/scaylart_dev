interface IOrganizations {
  name: string;
  date: string;
  locality: string;
  techs: string[];
  description: string;
}

export const organizations: IOrganizations[] = [
  {
    name: 'Innovative Research Technologies',
    date: 'APR 2023 - PRESENT',
    locality: 'Oakville, ON - Canada',
    techs: [
      'React',
      'React Native',
      'Fastify',
      'GraphQL',
      'Redis',
      'PostgreSQL',
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
  {
    name: 'Notis/us',
    date: 'FEB 2022 - APR 2023',
    locality: 'Curitiba, PR - Brazil',
    techs: [
      'React',
      'React Native',
      'NodeJS'
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
  {
    name: 'ATTO Sementes',
    date: 'MAR 2020 - FEB 2022',
    locality: 'Rondonópolis, MT - Brazil',
    techs: [
      'PHP',
      'Laravel',
      'Oracle',
      'React Native',
      'NestJS'
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
  {
    name: 'Tecnobit Sistemas Inteligentes',
    date: 'MAY 2011 - MAR 2020',
    locality: 'Rondonópolis, MT - Brazil',
    techs: [
      'Delphi',
      'Android',
      'ExtJS',
      'PHP',
      'Firebird',
      'PostgreSQL',
      'React',
      'React Native',
    ],
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
  },
]