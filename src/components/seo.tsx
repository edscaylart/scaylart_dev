import Head from 'next/head';
import { favicons } from '~/constants/favicons';

const defaultMeta = {
  description: 'Edson Souza - Software engineer adventurer',
  image: 'https://i.imgur.com/034uN4U.png',
  title: 'Edson Souza',
  siteName: 'Edson Souza',
  url: 'https://scaylart.dev',
  type: 'website',
  robots: 'follow, index',
}

interface ISeoProps extends Partial<typeof defaultMeta> {
  date?: string;
  title?: string;
};

export const Seo = (props: ISeoProps) => {
  const meta = { ...defaultMeta, ...props };

  return (
    <Head>
      <title>{meta.title}</title>

      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}`} />
      <link rel="canonical" href={`${meta.url}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta
        property="og:description"
        content={meta.description}
      />
      <meta property="og:title" content={meta.title} />
      <meta
        name="image"
        property="og:image"
        content={meta.image}
      />
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name="msapplication-TileColor" content="#191818" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#191818" />
    </Head>
  )
}