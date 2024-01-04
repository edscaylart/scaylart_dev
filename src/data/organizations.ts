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
    description: `As a Full Stack Engineer, I work at the dtect project, a field management and security application for market research organizations.`
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
    description: `As a Mobile Engineer, I worked on some challenging projects. I gained great experiences working with scalable products and using advanced architecture concepts.`
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
    description: `As a Front end/Mobile Engineer, I had the opportunity to work on major company initiatives. It was a good experience to learn more about agribusiness and the impact of technology.`
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
    description: `Here I started my programming career working with legacy projects in Delphi. I gained a lot of experience with the retail market and bureaucracies with invoices.`
  },
]