import type {
  InferGetServerSidePropsType,
  GetServerSideProps,
  GetServerSidePropsContext,
} from 'next';
import ArtistScreen from '@/screens/Artist/index';
import axios from 'axios';
import { NextSeo, NextSeoProps } from 'next-seo';
import { titleCase, getApiDestination } from '@/utility';
import _ from 'lodash';
import { cloudflareImage } from '@/utility/images';
import { Artist, IStructuredDataProps } from '@/types';
import StructuredData from '@/components/layout/StructuredData';

export default function ArtistPage({
  config,
  artistDetails,
  structuredData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <NextSeo {...config} />
      <StructuredData data={structuredData} />
      <ArtistScreen artistDetails={artistDetails} />
    </>
  );
}

export const getServerSideProps = (async (
  context: GetServerSidePropsContext
) => {
  try {
    const { params: { slug = '' } = {} } = context;

    const apiUrl = getApiDestination(process.env.ENV);

    const { data: artistData } = await axios.get(apiUrl + `/artists/${slug}`);

    const {
      data: {
        artist_name = '',
        address: { city = '', state = '' } = {},
        artist_image: [{ location = '' } = {}] = [],
        art_types = [],
      } = {},
    } = artistData;

    let seoDescription = 'Mural artist';
    if (artist_name) {
      seoDescription += ` ${artist_name}`;
    }
    if (city || state) {
      seoDescription += `, located in ${city || state}${
        city ? `, ${state}` : ''
      }`;
    }

    if (art_types.length) {
      seoDescription += ` is skilled in various art styles such as ${art_types.join(
        ', '
      )}`;
    }
    seoDescription += `. Discover hundreds of mural artists for hire, here only on WXLLSPACE.`;

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: artist_name,
      jobTitle: 'Mural Artist',
      address: {
        '@type': 'PostalAddress',
        addressRegion: state || city,
        addressCountry: 'US',
      },
      description: seoDescription,
      contentUrl: location,
    };

    return {
      props: {
        config: {
          title: `${titleCase(artist_name)} - Mural Artist | WXLLSPACE`,
          description: seoDescription,
          canonical: `https://explore.wxllspace.com/artist/${slug}`,
          openGraph: {
            url: `https://explore.wxllspace.com/artist/${slug}`,
            title: `${titleCase(artist_name)} - Mural Artist | WXLLSPACE`,
            description: seoDescription,
            type: 'website',
            images: [
              {
                url: cloudflareImage(
                  location ||
                    'https://wxllspace-app.s3.us-east-2.amazonaws.com/assets/404/Astro.png'
                ),
                alt: `${titleCase(artist_name)} - Mural Artist | WXLLSPACE`,
              },
            ],
          },
          twitter: {
            handle: '@wxllspace',
            site: '@wxllspace',
            cardType: 'summary_large_image',
          },
        },
        artistDetails: artistData,
        structuredData,
      },
    };
  } catch (error) {
    console.log('[error]', error);

    return {
      notFound: true,
    };
  }
}) as GetServerSideProps<{
  config: NextSeoProps;
  artistDetails: Artist;
  structuredData: IStructuredDataProps;
}>;
